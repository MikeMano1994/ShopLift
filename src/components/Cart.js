import React, {Component} from 'react';
import emptycart from '../picture/empty-cart.png';
import '../App.css';

export default class Cart extends Component{
	constructor(props){
		super(props);
		this.state={
			items:{
			}
		};
		this.addToCart = this.addToCart.bind(this);
	}

	// pass this into Products.js for it to add to cart
	addToCart(itemName){
		var items = this.state.items;
		if (itemName !== null && itemName !== undefined){
			items[itemName] = 1;
		}
		this.setState({items:this.items});
	}

	// use this function locally for when user increment or decrement quantity in cart
	updateCart(itemName, step){
		var items = this.state.items;
		if (itemName !== null && itemName !== undefined && !items[itemName]){
			items[itemName] = 1;
		}
		else{
			items[itemName] += step;
			if (items[itemName] === 0){
				delete items[itemName];
			}
		}
	}

    render(){
        return(
        	<div>
            	<div className = "cart">
            		<a href="/shop"> 
	            		<p><span class="glyphicon glyphicon-chevron-left"></span> 
	            		Continue Shopping</p>
	            	</a>
            		<h1> MY CART </h1>
            	</div>
                <img src={emptycart} alt="emptycart" />


            	{/*<div>
				<a href="/check-out" > 
	            	<button type="button" class="btn btn-dark"
                    style = {{marginBottom: '50px',marginTop: '50px' }}>
                    <p>CHECK OUT</p>
                    </button>
	            </a>
				</div>*/}

            </div>
        );
	}
	
}
