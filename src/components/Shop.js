import React, {Component} from 'react';
import Products from "./Products";
import Sidebar from './Sidebar';
import {Form, FormGroup,
        Input,
        Button
} from 'reactstrap';
import product from './product.json';

import fire from '../fire';

export default class Shop extends Component{
	constructor(props){
    super(props);
    this.state={
      category: 'all',
      products: {},
      unfilteredProducts:{}

    };
    this.setCategory = this.setCategory.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  setCategory(c){
    if (c !== null && c !== undefined){
      this.setState({category: c});
    }
  }
  handleSearch(event){
    let filteredProducts = this.state.unfilteredProducts;
    filteredProducts = filteredProducts.filter(i => i.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1 || i.category.toLowerCase().search(event.target.value.toLowerCase()) !== -1)
    this.setState({products: filteredProducts});
  }
   componentWillMount(){
    this.setState({products: product});
    this.setState({unfilteredProducts: product});
  }


  render(){
      return(
        <div >     
          <div className='container'>
            <div className='row'>
            
              <div className='col-xs-12'>
                <Sidebar setCategory={this.setCategory}/>
              </div>
              
              <FormGroup>
              <Form className="movetotheright" >
                <Input className = "searchbar"
                  type="text" placeholder="Search for an item..." onChange = {this.handleSearch}/>
              </Form>     
              </FormGroup>

              <FormGroup>
              <Button type="submit" size="lg" outline color="success" >
                <span className="glyphicon glyphicon-search my-sm-0"/>
              </Button>
              </FormGroup>


              <br/>
              <div className='col-xs-12'>
                <Products addToCart={this.props.addToCart} category={this.state.category} productsList={this.state.products}/>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
