import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import AboutUs from  './components/AboutUs.js';
import Cart from './components/Cart';
import CheckOut from './components/checkout/CheckOut';
import Contact from './components/Contact';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Shop from './components/Shop';
import SignUp from './components/SignUp';
import UserAgreement from './components/UserAgreement';
import UserPrivacy from './components/UserPrivacy';
import UserProfile from './components/UserProfile';

import fire from './fire';

import './App.css';
import '../node_modules/react-image-slider/lib/image-slider.css';

{/*import Auth from './Auth';*/}

class App extends Component {
  constructor(){
    super();
    this.state={
      authed:false
    };
    this.loggedIn = this.loggedIn.bind(this);
  }
  
  componentWillMount(){
    if (fire.auth().currentUser !== null || fire.auth().currentUser !== undefined)
      this.setState({authed:true});
  }

  loggedIn(e){
    if (e !== null && e !== undefined)
      this.setState({authed:e});
    console.log(e);
  }
  
  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <Navbar authed={this.state.authed} loggedIn={this.loggedIn}/>
          <h1 className="App-title">“Deals so great - It’s a steal.”</h1>
        </div>
        <div className='App-landing'>
          <BrowserRouter>
            <div id='routes'>
              <Route exact path='/' component={Home} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/about-us' component={AboutUs} />
              <Route exact path='/shop' component={Shop} />
              <Route exact path='/login' render={()=>{return(<LogIn loggedIn={this.loggedIn}/>);}}/>
              <Route exact path='/signup' component={SignUp} /><Route exact path='/profile' component={UserProfile} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/check-out' component={CheckOut} />
              <Route exact path='/useragreement' component={UserAgreement} />
              <Route exact path='/userprivacy' component={UserPrivacy} />

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
