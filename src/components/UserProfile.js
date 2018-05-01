import React, { Component } from 'react';
import UserCard from './UserCard';

import "../App.css";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
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
