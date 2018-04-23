import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import UserCard from './UserCard';
import "../App.css";

export default class UserProfile extends Component {
  render() {
    return (
        <div><UserCard/></div>
    )
  }
}
