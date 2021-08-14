import { React, useState, useEffect, useReducer } from 'react';
import './app.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';
import History from './components/History';

// import axios from 'axios';

const initialState = {
  requests: [],
};

let history;

function historyReduser(state = initialState, action) {
  const { type, payload } = action;
  console.log(state);

  switch (type) {
    case 'addSearch':
      // console.log('state.requests', state.requests);
      const requests = [...state.requests, payload];
      // console.log('requests', requests);
      history = requests;
      return { requests };
    default:
      return state;
  }
}

function addSearch(requestParams, data) {
  return {
    type: 'addSearch',
    payload: {
      url: requestParams.url,
      method: requestParams.method,
      result: data,
    },
  };
}

function App() {
  const [state, dispatch] = useReducer(historyReduser, initialState);
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [requestParams, setrequestParams] = useState({});

  async function callApi(requestParams) {
    setrequestParams(requestParams);
  }

  useEffect(async () => {
    try {
      const raw = await fetch(requestParams.url);
      const data = await raw.json();
      setdata(null);
      setloading(true);
      setTimeout(() => {
        setloading(false);
        setdata(data);
      }, 800);

      dispatch(addSearch(requestParams, data));
    } catch (e) {
      setdata(null);
    }
  }, [requestParams]);

  return (
    <>
      <Header />
      <Form handleApiCall={callApi} />
      <div className="request">
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
      </div>
      <History handleApiCall={callApi} history={history} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
