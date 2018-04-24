import React, { Component } from 'react';
import product from './product.json';
import Item from './Item';

export default class Products extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: {},
      category: ''
    };
  }

  componentWillMount() {
    this.setState({products: product, category: this.props.category});
  }

  render() {
    let productKeys = Object.keys(this.props.productsList);

    return (
      <div className="products">
        <div className="container">
          <div className="row">
            { this.props.children }
            { productKeys.map((element,index) => {
              if (this.props.category === 'all'){
                return (
                  <div className="col-md-6 col-sm-6 col-lg-4 col-xs-12 col-xl-3 control-label">
                    <Item a={this.props.productsList[element]} addToCart={this.props.addToCart}/>
                  </div>

                );
              }
              else if(this.props.productsList[element].sale === true && this.props.category=== "sale"){
                return(
                  <div className="col-md-6 col-sm-6 col-lg-4 col-xs-12 col-xl-3 control-label">
                    <Item a={this.props.productsList[element]} addToCart={this.props.addToCart}/>
                  </div>
                );

              }
              else{
                if (this.props.productsList[element].category === this.props.category){
                  return (
                    <div className="col-md-6 col-sm-6 col-lg-4 col-xs-12 col-xl-3 control-label">
                      <Item a={this.props.productsList[element]} addToCart={this.props.addToCart}/>
                    </div>
                  );
                }
              }
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
