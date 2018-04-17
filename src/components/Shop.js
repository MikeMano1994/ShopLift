import React, {Component} from 'react';
import FilterTable from './FilterTable';

export default class Shop extends Component{
	constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
          <div>
            <FilterTable/>
          </div>
        );
    }
}
