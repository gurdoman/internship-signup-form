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
    console.log(email, interest);
    let userData = {
      email,
      interest
    }
    localStorage.setItem('userData', JSON.stringify(userData));
    this.setState({userData});
  }

  componentDidMount(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    this.setState({userData});
  }

  render(){
    return (
      <div className="app">
        <Header />
        {
          this.state.userData === null ? 
          <Signup saveUser={this.saveUser} /> : 
          <Thanks />
        }
      </div>
    );
  }
}

export default App;
