import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AboutUs  from  './components/AboutUs.js';
import Cart     from './components/Cart';
import CheckOut from './components/CheckOut';
import Contact  from './components/Contact';
import Footer   from './components/layout/Footer';
import Header   from './components/layout/Header';
import Home     from './components/Home';
import LogIn    from './components/LogIn';
import Shop     from './components/Shop';
import SignUp   from './components/SignUp';

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
                <Route exact path='/'         component={Home} />
                <Route exact path='/contact'  component={Contact} />
                <Route exact path='/about-us' component={AboutUs} />
                <Route exact path='/shop'     component={Shop} />
                <Route exact path='/login'    component={LogIn} />
                <Route exact path='/signup'   component={SignUp} />
                <Route exact path='/cart'     component={Cart} />
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
