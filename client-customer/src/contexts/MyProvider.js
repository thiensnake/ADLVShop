import React, { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      customer: null,
      mycart: [], // Add mycart state
      setToken: this.setToken,
      setCustomer: this.setCustomer,
      setMycart: this.setMycart, // Add setMycart function
      // Include the global state variables and functions
      // variables
      // ...,
      // functions
      // ...,
    };
  }

  setToken = (value) => {
    this.setState({ token: value });
  }

  setCustomer = (value) => {
    this.setState({ customer: value });
  }

  setMycart = (value) => { // Implement the setMycart function
    this.setState({ mycart: value });
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
