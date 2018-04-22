import React, {Component} from 'react';
import Products from "./Products";
import Sidebar from './Sidebar';

export default class Shop extends Component{
	constructor(props){
    super(props);
    this.state={
      category: 'all'
    };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(c){
    if (c !== null && c !== undefined){
      this.setState({category: c});
    }
  }

  render(){
      return(
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <Sidebar setCategory={this.setCategory}/>
            </div>
            <br/>
            <div className='col-xs-12'>
              <Products category={this.state.category}/>
            </div>
          </div>
        </div>
      );
  }
}
