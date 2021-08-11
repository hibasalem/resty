import { React, useState, useEffect } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';



function App() {
  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});

  async function callApi(requestParams) {
    setrequestParams(requestParams);
  }

  useEffect(async () => {
    try {
      const raw = await fetch(requestParams.url);
      const data = await raw.json();
      setdata(data);
    } catch (e) {
      // const data = {
      //   count: 2,
      //  results: [
      //     { name: 'fake thing 1', url: 'http://fakethings.com/1' },
      //    { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      // ],
      // };
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
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
