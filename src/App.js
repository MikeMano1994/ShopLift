import React, { Component } from 'react';
import Images from './components/Images';
import logo from './logo.svg';

import './App.css';
import '../node_modules/react-image-slider/lib/image-slider.css';

class App extends Component {
  render() {
    return (
      <Images/>
    );
  }
}

export default App;
