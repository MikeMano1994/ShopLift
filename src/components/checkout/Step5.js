import React, {Component} from 'react';
import {Button, Panel} from 'react-bootstrap';

export default class Step5 extends Component{
	 constructor(props) {
    super(props);
    this.state = {};
  	}

    render(){
        return(
        <div>
    	<h1> Review and submit your order</h1>
    	<div className = "shipping">
    		<Panel>
    		<Panel.Heading>Shipping Information</Panel.Heading>
    		<Panel.Body>
    			<p>Firstname:</p>
      			<p>Lastname:</p>
     			<p>Address:</p>
      			<p>City:</p>
      			<p>State:</p>
      			<p>Zipcode:</p>
    		</Panel.Body>
    		</Panel>
    	</div>
    	<div className = "paymentInfo">
    		<Panel>
    		<Panel.Heading>Payment Information</Panel.Heading>
    			<Panel.Body>
    			<p>Cardname:</p>
      			<p>Cardnumber:</p>
     			<p>Expmonth:</p>
      			<p>Expyear:</p>
      			<p>cvv:</p>
    			</Panel.Body>
    		</Panel>
    	</div>
    	</div>
        );    
    }
}
