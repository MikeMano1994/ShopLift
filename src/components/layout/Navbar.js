import React, { Component } from 'react';
import logo from '../../picture/logo.jpg';
import {Glyphicon, Button} from 'react-bootstrap';


import '../../App.css';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (

        <div>
            <img className="App-logo" src={logo} alt="logo" />
            
             <div className="bg-white clearfix" style={{ padding: '.5rem' }}>

                <div className=" float-left ">
                    <form className="form-inline my-9 my-lg-4">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search for items!" aria-label="Search" />
                    </form>
                </div>

                <div className = " float-right " >
                <Glyphicon className="icon" glyph="user" /> 
                <a href="/login">Log In</a>
                <a href= "#"><Glyphicon className="icon" glyph="shopping-cart" /></a>
                </div>
            </div>

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
    )
  }
}
