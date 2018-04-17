import React, {Component} from 'react';

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


            <h1> THIS IS EMPTY CART </h1>
            <h1> THIS IS EMPTY CART </h1>
            <h1> THIS IS EMPTY CART </h1>
            <h1> THIS IS EMPTY CART </h1>
            <h1> THIS IS EMPTY CART </h1>
            </div>
        );
    }
}
