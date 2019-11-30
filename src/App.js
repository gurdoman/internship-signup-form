import React, { Component } from 'react'
import './App.css';
import Header from './components/header/Header';
import Signup from './components/signup-form/Signup';
import Thanks from './components/thank-you-message/Thanks';

class App extends Component {

  constructor(){
    super();
    this.state = {
      userData : ""
    }
  }

  saveUser = (email, interest) =>{
    console.log(`Email: ${email}`, `Interest: ${interest}`);
    let userData = {
      email,
      interest
    }
    sessionStorage.setItem('userData', JSON.stringify(userData));
    this.setState({userData});
  }

  render(){
    return (
      <div className="app">
        <Header />
        {
          this.state.userData === "" ? 
          <Signup saveUser={this.saveUser} /> : 
          <Thanks />
        }
      </div>
    );
  }
}

export default App;
