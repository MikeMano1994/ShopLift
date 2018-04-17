import React, { Component } from 'react';
import Item from './Item';

export default class Products extends Component {
  render() {
    return (
      <div className="products">
        { this.props.children }
      </div>
    )
  }
}
