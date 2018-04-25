import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Redirect} from 'react-router-dom';

import fire from '../fire';

import "../App.css";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: "",
      redirectTo: null
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{
      this.props.loggedIn(true);
      this.setState({email:"",password:"",redirectTo:"/"});
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(error){
        alert(error);
      }
    });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{pathname: this.state.redirectTo}} />
    }
    return (
      <div className="loginpage">
        <h1>Log In</h1>
        <h5>
          Not a member? <a href="/signup">Sign Up</a>
        </h5>

        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              placeholder="abc@example.com"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              placeholder="Password goes here"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
