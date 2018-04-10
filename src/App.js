import React, { Component } from 'react';

import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Footer from './components/layout/Footer';

import './App.css';
import '../node_modules/react-image-slider/lib/image-slider.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">“Deals so great - It’s a steal”</h1>
        </div>
        <Navbar/>
        {/*
          BrowserRouter and linking will be here
          Home.js, Login.js, Register.js, Cart.js, Profile.js, etc ... will by dynamically routed here
        */}
        <Home/>
        <Content/>
        <div className = "App-footer">
        <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
