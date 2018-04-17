import React, {Component} from 'react';
import Map from './Map';

import '../App.css';
import raccoon from '../picture/cuteraccoon.jpg';

export default class Contact extends Component{
    render(){
        return(
          <div>
            <Map/>
            <div className = "contact">
              <h1> Contact Us </h1>
              <br></br>
              <h3> ShopLift Inc.</h3>
              <h4> 1 Washington Sq</h4>
              <h4> San Jose, CA 95192 </h4>
              <h4> Phone: (408) 123-4567</h4>
              <h4> Fax: (800) 987-LIFT </h4>
              <h4> Email: info@shop_liftteam.com </h4>
            </div>

             <h1 className = "App-title"> "We're always here for you. Let me know what you want"</h1> 
             <img style={{width:'250px', height:'250px'}} src={raccoon} alt="raccoon" />
           </div>
        );
    }
}
