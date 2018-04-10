import React, { Component } from 'react';
import logo from './picture/logo.jpg';
import Images from './components/Images';
import Footer from './components/Footer';
import Content from'./components/Content';
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
        
        <div style={{marginTop:'200px'}}>
        <Images/>
        </div>
        <Content/>
        <div className = "App-footer">
        <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
