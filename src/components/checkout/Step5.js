import React, {Component} from 'react';
import {Grid, Button, Panel, Row, Col} from 'react-bootstrap';

export default class Step5 extends Component{
  constructor(props) {
		super(props);

  	this.state = {};
	}

  render(){
    return(
    	<div class="review">
  			<h1> Review and submit your order</h1>
  			<Grid>
  				<Row className="show-grid">
  					<Col md={6} >
              <Panel md={12}>
                <Panel.Heading >
                  Shipping Information
                  <a onClick={() => this.props.jumpToStep(2)}>
                    <Button bsStyle="dark" bsSize="large">
                      Edit
                    </Button>
                  </a>
                </Panel.Heading>

                <Panel.Body>
                  <p>{this.props.getStore().firstname}, {this.props.getStore().lastname}</p>
                  <p>{this.props.getStore().address}</p>
                  <p>{this.props.getStore().city}, {this.props.getStore().state}</p>
                  <p>{this.props.getStore().zipcode}</p>
                </Panel.Body>
              </Panel>
  					</Col>

  				<Col md={6} >
  					  <Panel>
              <Panel.Body>
                <p>Item Total:</p>
                <p>Shiping:</p>
                <p>Sales Tax:</p>
                <p>Order Total:</p>
              </Panel.Body>
             
              <Panel.Footer>
                <a onClick={() => this.props.jumpToStep(5)}>
                  <Button bsStyle="dark" bsSize="large">
                    Submit Order
                  </Button>
                </a>
              </Panel.Footer>
            </Panel>
  				</Col>
  			</Row>

  			<Row className="show-grid">
  				<Col md={6}>
  					<Panel md={6}>
	  					<Panel.Heading>
	  						Payment Information
	  						<a onClick={() => this.props.jumpToStep(3)}>
	              	<Button bsStyle="dark" bsSize="large">
	                	Edit
	            	 	</Button>
	         	 		</a>
		  				</Panel.Heading>
		  				<Panel.Body>
		  				  <p>Card Name:{this.props.getStore().cardname}</p>
		    				<p>Cardnumber:{this.props.getStore().cardnumber}</p>
		   				  <p>ExpMonth:{this.props.getStore().expmonth}</p>
		            <p>ExpYear:{this.props.getStore().expyear}</p>
		    				<p>cvv:{this.props.getStore().cvv}</p>
	  					</Panel.Body>
  					</Panel>
  				</Col>
  			</Row>
  		</Grid>
  	</div>
		);
	}
}
