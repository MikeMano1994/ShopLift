import React, { Component } from 'react';
import logo from './picture/logo.jpg';

import './App.css';
import '../node_modules/react-image-slider/lib/image-slider.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">“Deals so great - It’s a steal”</h1>
        </header>
        <Images/>
      </div>
    );
  }
}

export default App;
