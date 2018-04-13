import React, { Component } from 'react';
import logo from '../../picture/logo.jpg';

import '../../App.css';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
        <div>
          <img className="App-logo" src={logo} alt="logo" />
          <nav className="navbar navbar-expand-lg navbar-white bg-white">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about-us">About Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}
