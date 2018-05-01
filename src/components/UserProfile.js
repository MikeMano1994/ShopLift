import React, { Component } from 'react';
import UserCard from './UserCard';

import "../App.css";

export default class UserProfile extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);

    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
  }
=======
>>>>>>> 6797181cf16984bb5f6e63a553ce475f8d164090

  render() {
    return (
      <div>
        <div className='user-profile'>
          <UserCard addToCart={this.props.addToCart} getUser={this.props.getUser}/>
        </div>
      </div>
  )}
};
