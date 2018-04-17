import React, { Component } from 'react';
import { EmptyCart} from '../EmptyCart';

import logo from '../../picture/logo.jpg';
import user from '../../picture/user.png';
import '../../App.css';

export class Navbar extends Component {
  render() {
    return (
        <div>
          <div>
          <a href="/">
            <img className="App-logo" src={logo} alt="logo" />
          </a>
          </div>
            
            <div className= "bignavbar">
            <nav className="navbar navbar-expand-lg navbar-white bg-white">    
                
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <form className="form-inline my-0 my-sm-0">
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      <input className="form-control mr-sm-2" type="search" placeholder="Search for the fresh!" aria-label="Search" />
                    </form>
                  </li>
               
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
             

                  <li className="nav-item">
                    <img width={35} height={35} src={user} alt={user}/>
                    <a href="/login">Log In</a>
                    <EmptyCart />
                  </li>
 
                </ul>
         
            </nav>
        </div>
        </div>
    );
  }
}
