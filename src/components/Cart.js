import React, {Component} from 'react';
import {Well} from 'react-bootstrap';
import emptycart from '../picture/empty-cart.png';
import '../App.css';

export default class Cart extends Component{
	constructor(props){
		super(props);

		this.state = {
			items:{}
		};
	}

	renderCart(){
		// if items exist, then render cart, else render nothing(empty cart image)
		if (this.props.items){
		  let rowStyle={
			margin: '10px'
		  }
		  return(
			<Well style={{marginLeft:'5vw',marginRight:'5vw', marginTop:'2vh'}}>
			  {Object.keys(this.props.items).map((v,i)=>{
				return(
				  <div className='row'>
					  <div style={rowStyle} className='col-xs-6 offset-xs-3 text-center'>{this.props.items[v]} of {v} <br/> ${this.props.prices[v].toFixed(2)} each</div>
					  <div style={rowStyle} className='col-xs-3 text-right'>${(this.props.prices[v] * this.props.items[v]).toFixed(2)}</div>
				  </div>
				)
			  })}
			</Well>
		  );
		}
		return(
		  <img style={{width:'250px', height:'150px'}} src={emptycart} alt="emptycart" />
		);
	  }

  render() {
    return (
		<div>
			{this.renderCart()}
		</div>		
    );
	}
}
