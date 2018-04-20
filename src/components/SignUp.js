import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";

import "../App.css";

export default class Signup extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      newUser: null,
      redirectTo: null,
      checked: null
    }

    this.handleCheckedChanged = this.handleCheckedChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
  }

  handleCheckedChanged = event => {
    this.setState({checked: event.target.checked})
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    this.setState({ newUser: "TEST-USER" });
    this.setState({ isLoading: false });

    axios
      .post("/auth/SignUp", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response)

        if (!response.data.errmsg) {
          console.log("You are good to go");

          this.setState({
            redirectTo: '/LogIn'
          })
        }
        else {
          console.log('duplicate');
        }
      })
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword &&
      this.state.checked
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>

        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>

        <div className='row'>
          <div className='ten columns terms'>
            <span>By clicking "Accept" I agree that:</span>
              <ul className='docs-terms'>
                <li>
                  I have read and accepted the <a href='/useragreement' style={{ color:'#626e60'}}>User Agreement</a>
                </li>
                <li>
                  I have read and accepted the <a href='/userprivacy' style={{ color:'#626e60'}}>Privacy Policy</a>
                </li>
                <li>
                  I am at least 18 years old
                </li>
              </ul>

            <label>
              <input
                type='checkbox'
                defaultChecked={this.state.checked}
                checked={this.state.checked}
                onChange={this.handleCheckedChanged}
                autoFocus
              />
              <span> Accept </span>{' '}
            </label>
          </div>
        </div>

        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Sign Up"
          loadingText="Signing up…"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{pathname: this.state.redirectTo}} />
    }
    else {
      return (
        <div className="signuppage">
          <h1>Sign Up </h1>
          {this.state.newUser === null ? this.renderForm(): console.log("Jenn is a good Jenn.")}
        </div>
      );
    }
  }
}
