import React, {Component} from 'react';
import {Button, Panel} from 'react-bootstrap';

export default class Step5 extends Component{
	 constructor(props) {
    super(props);
    this.state = {};
  	}

    render(){
        return(
        <div class="review">
    	<h1> Review and submit your order</h1>
    	<div class="container">
    		<div class="row">
    			<div class="col-lg-6 col-md-6 col-xs-12">
    			<Panel>
    			<Panel.Heading>
    				Shipping Information

    				<a onClick={() => this.props.jumpToStep(2)}> 
                		<button type="button" class="btn btn-dark ml-10"
                			style = {{marginBottom: '10px',marginTop: '10px' }}>
                    			<p className="btn-work">Edit</p>
              		  </button>
           	 		</a>

    			</Panel.Heading>

    			<Panel.Body>
    				  <p>{this.props.getStore().firstname}, {this.props.getStore().lastname}</p>
        	    <p>{this.props.getStore().address}</p>
      				<p>{this.props.getStore().city}, {this.props.getStore().state}</p>
      				<p>{this.props.getStore().zipcode}</p>
    			</Panel.Body>
    			</Panel>
    			</div>

    			<div class="col-lg-6 col-md-6 col-xs-12">
    			<Panel>
    				<Panel.Body>
    				<p>Item Total:</p>
      				<p>Shiping:</p>
     				<p>Sales Tax:</p>
      				<p>Order Total:</p>
      				<a onClick={() => this.props.jumpToStep(5)}> 
               	 		<button type="button" class="btn btn-dark btn-lg btn-block"
                			style = {{marginBottom: '10px',marginTop: '10px'}}>
                    			<p className="btn-work">Submit Order</p>
              		  	</button>
           	 		</a>
    				</Panel.Body>
    			</Panel>
    			</div>
    		</div>

    		<div class="row">
    		<div class="col-lg-6 col-md-6 col-xs-12">
    			<Panel>
    			<Panel.Heading>
    				Payment Information

    				<a onClick={() => this.props.jumpToStep(3)}> 
                		<button type="button" class="btn btn-dark ml-10"
                			style = {{marginBottom: '10px',marginTop: '10px' }}>
                   	 			<p className="btn-work">Edit</p>
              	 	 </button>
           	 		</a>

    			</Panel.Heading>
    				<Panel.Body>
    				  <p>Cardname:{this.props.getStore().cardname}</p>
      				<p>Cardnumber:{this.props.getStore().cardnumber}</p>
     				  <p>ExpMonth:{this.props.getStore().expmonth}</p>
              <p>ExpYear:{this.props.getStore().expyear}</p>
      				<p>cvv:{this.props.getStore().cvv}</p>
    				</Panel.Body>
    			</Panel>
    		</div>
    		</div>
    	</div>
    	</div>
        );    
    }
}
