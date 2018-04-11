import React, { Component } from 'react';

import Footer from './components/layout/Footer';
import Home from './components/Home';
import logo from './picture/logo.jpg';
import Navbar from './components/layout/Navbar';

import {BrowserRouter, Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import './App.css';
import '../node_modules/react-image-slider/lib/image-slider.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">“Deals so great - It’s a steal.”</h1>
        </div>
        <div className='App-nav'>
          <Navbar />
        </div>
        <div>
          <BrowserRouter>
            <div>
              <div id='routes'>
                <Route exact path='/' component={Home} />
              </div>
            </div>
          </BrowserRouter>
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
