import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    this.setState({ data, requestParams });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handleApiCall={this.callApi} />
        <div className="request">
          <div>Request Method: {this.state.requestParams.method}</div>
          <div>URL: {this.state.requestParams.url}</div>
        </div>
        <Results data={this.state.data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
