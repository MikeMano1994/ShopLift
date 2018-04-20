import React, {Component} from 'react';
import emptycart from '../picture/empty-cart.png';
import '../App.css';

export default class Cart extends Component{
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
