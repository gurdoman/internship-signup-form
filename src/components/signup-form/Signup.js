import React, { Component } from 'react'
import './Signup.css';

export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      email: "",
      emailValid: true,
      interest: "",
      submit : false
    }
  }

  handleSubmit = (event) =>{
    if(this.state.emailValid && this.state.email !== "" && this.state.interest !== "" && !this.state.submit){
      this.setState({submit: true});
      this.simulateRequest();
    }
      
    event.preventDefault();
  }

  validateEmail = (event) => {
    let email = event.target.value;
    let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || email === "";
    this.setState({
      email,
      emailValid
    })
  }

  handleChange = (event) =>{
    let interest = event.target.value;
    this.setState({interest})
  }

  simulateRequest = () =>{
    setTimeout(() => this.props.saveUser(this.state.email, this.state.interest), 2000);
  }


  render() {
    const {email, emailValid, interest, submit} = this.state;
    return (
      <div className="body">
        <p className="paragraph">Prepare for your career with Project Management, Web-Development, Graphic design, or Digital Marketing Internship at Northern.</p>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div className="form_data">
            <div className="form_email-container">
              <label 
                htmlFor="email" 
                className="form_error">
                  {emailValid ? '' : 'Please enter a valid email address.'}
              </label>
              <input 
                id="email"
                type="email" 
                className={"form_email form_input " +  (emailValid ? '' : 'invalid')} 
                value={email} 
                onChange={this.validateEmail} 
                placeholder="Your Email Address *"
              />
            </div>
            <select className="form_interest form_input" value={interest} onChange={this.handleChange}>
              <option value="" disabled hidden>Your Interests</option>
              <option value="development">Development</option>
              <option value="sales">Sales</option>
            </select>
          </div>
          <input 
            className="form_submit" 
            type="submit" 
            value={submit ? "Submitting..." : "Sign Up Now \u25BA"} 
          />
        </form>
      </div>
    )
  }
}
