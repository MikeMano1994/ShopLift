import React, { Component } from 'react';

import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Footer from './components/layout/Footer';

import './App.css';
import '../node_modules/react-image-slider/lib/image-slider.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        {/*
          BrowserRouter and linking will be here
          Home.js, Login.js, Register.js, Cart.js, Profile.js, etc ... will by dynamically routed here
        */}
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
