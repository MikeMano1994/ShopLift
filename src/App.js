import React, { Component } from 'react';

import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Footer from './components/layout/Footer';

import {BrowserRouter, Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import logo from './picture/logo.jpg';
import './App.css';
import '../node_modules/react-image-slider/lib/image-slider.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">“Deals so great - It’s a steal”</h1>
          </div>
        */}
        
        <Navbar/>
        <div>
          {/*
            BrowserRouter and linking will be here
            Home.js, Login.js, Register.js, Cart.js, Profile.js, etc ... will be dynamically routed here
          */}
          <Home/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
