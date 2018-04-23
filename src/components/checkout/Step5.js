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
    	<div className = "review">
    		<Panel>
    		<Panel.Heading>
    			Shipping Information

    			<a onClick={() => this.props.jumpToStep(2)}> 
                	<button type="button" class="btn btn-dark ml-10"
                		style = {{marginBottom: '10px',marginTop: '10px' }}>
                    		<p>Edit</p>
              	  </button>
           	 	</a>

    		</Panel.Heading>
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
    	<div className = "review">
    		<Panel>
    		<Panel.Heading>
    			Payment Information

    			<a onClick={() => this.props.jumpToStep(3)}> 
                	<button type="button" class="btn btn-dark ml-10"
                		style = {{marginBottom: '10px',marginTop: '10px' }}>
                    		<p>Edit</p>
              	  </button>
           	 	</a>
           	 	
    		</Panel.Heading>
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
