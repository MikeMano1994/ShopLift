import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import UserCard from './UserCard';
import { Button, Fade } from 'reactstrap';
import "../App.css";

export default class UserProfile extends Component {
  constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }

  render() {
    return (
        <div>
            <Button outline color="success my-sm-0" onClick={this.toggle}>GET THE CODE</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    TACOTUESDAY
                </Fade>
          <div className='user-profile'>
            <UserCard addToCart={this.props.addToCart} authed={this.props.authed} user={this.props.user}/>
        </div>
        </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};
        
    