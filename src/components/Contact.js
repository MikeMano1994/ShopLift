import React, { Component } from "react";
import Map from "./Map";

import "../App.css";
import raccoon from "../picture/cuteraccoon.jpg";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  nameInput(e) {
    this.setState({ name: e.target.value });
  }

  emailInput(e) {
    this.setState({ email: e.target.value });
  }

  subjectInput(e) {
    this.setState({ subject: e.target.value });
  }

  messageInput(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Map />
        <div className="contact">
          <h1> Contact Us </h1>
          <br />
          <h3> ShopLift Inc.</h3>
          <h4> 1 Washington Sq</h4>
          <h4> San Jose, CA 95192 </h4>
          <h4> Phone: (408) 123-4567</h4>
          <h4> Fax: (800) 987-LIFT </h4>
          <h4> Email: info@shop_liftteam.com </h4>
        </div>

        <h1 className="App-title">
          "We're always here for you. Let me know what you want"
        </h1>

        <div class="contactName">
          <input
            name="contactName"
            type="text"
            value={this.state.name}
            onChange={this.nameInput.bind(this)}
            placeholder="Name"
          />
        </div>

        <div class="contactEmail">
          <input
            name="contactEmail"
            type="text"
            value={this.state.email}
            onChange={this.emailInput.bind(this)}
            placeholder="Email"
          />
        </div>
        <div class="contactsubject">
          <input
            type="text"
            value={this.state.subject}
            onChange={this.subjectInput.bind(this)}
            placeholder="Subject"
          />
        </div>
        <div class="contactMessage">
          <textarea
            type="text"
            value={this.state.message}
            onChange={this.messageInput.bind(this)}
            placeholder="Message"
          />
        </div>
        <button className="ContactSendButton" onSubmit={this.handleSubmit}>
          Send
        </button>

        {/* <img
          style={{ width: "250px", height: "250px" }}
          src={raccoon}
          alt="raccoon"
        /> */}
      </div>
    );
  }
}
