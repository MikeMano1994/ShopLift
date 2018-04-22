import React, {Component} from 'react';
import Products from "./Products";
import Sidebar from './Sidebar';

export default class Shop extends Component{
	constructor(props){
    super(props);
    this.state={
      category: 'all'
    };
  }

  setCategory(c){
    if (c !== null || c !== undefined)
      this.setState({category: c});
  }

  render(){
      return(
        <div className='container'>
          <div className='row'>
            <div className='col-s-12 col-md-6'>
              <Products/>
            </div>
            <div className='col-s-12 col-md-6'>
              <Sidebar setCategory={this.setCategory}/>
            </div>
          </div>
        </div>
      );
  }
}
