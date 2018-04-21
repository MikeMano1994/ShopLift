import React, { Component } from 'react';
import product from './product.json';
import Item from './Item';

export default class Products extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: {}
    }
  }

  componentWillMount() {
    this.setState({products: product});
  }

  render() {
    let productKeys = Object.keys(this.state.products);

    return (
      <div className="products">
        <div className="container">
          <div className="row">
            { this.props.children }
            { productKeys.map((element,index) => {
              return (
                <div className="col-md-6 col-sm-6 col-lg-4 col-xs-12 col-xl-3 control-label">
                  <Item a={this.state.products[element]} />
                </div>
              )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
