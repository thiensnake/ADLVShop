import './App.css';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import MyProvider from './contexts/MyProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...'
    };
  }

  componentDidMount() {
    // Make an HTTP GET request to the '/hello' endpoint
    axios.get('/hello')
      .then((res) => {
        const result = res.data;
        this.setState({ message: result.message });
      })
      .catch((error) => {
        // Handle any errors here, for example:
        console.error("Error fetching data:", error);
        this.setState({ message: 'An error occurred while fetching data.' });
      });
  }

  render() {
    return (
      <MyProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MyProvider>
    );
  }
}

export default App;
