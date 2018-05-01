import React, { Component } from 'react';
import UserCard from './UserCard';
import { Button, Fade } from 'reactstrap';

import "../App.css";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      fadeIn: true
    });
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }

  render() {
    return (
      <div>
        <div className='user-profile'>
          <UserCard addToCart={this.props.addToCart} getUser={this.props.getUser}/>
        </div>
      </div>
  )}
};
