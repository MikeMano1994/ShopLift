import React, {Component} from 'react';
import FilterTable from './FilterTable';
import Products from "./Products";

export default class Shop extends Component{
	constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
          <div>
            <Products/>

          </div>
        );
    }
}
