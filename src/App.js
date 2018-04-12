import React, { Component } from 'react';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from  './components/AboutUs.js';


import {BrowserRouter, Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import './App.css';
import '../node_modules/react-image-slider/lib/image-slider.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <Header />
          <h1 className="App-title">“Deals so great - It’s a steal.”</h1>
        </div>

        <div className='App-landing'>
          <BrowserRouter>
            <div>
              <div id='routes'>
                <Route exact path='/' component={Home} />
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/about-us' component={AboutUs}/>
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
