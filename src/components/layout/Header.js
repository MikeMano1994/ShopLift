import React, { Component } from 'react';

import { Navbar } from './Navbar';
import { EmptyCart } from '../EmptyCart';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      cart: this.props.cartItems,
    };
  }

  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart
    })
  }

  render() {
    return (
      <header>
        <Navbar />
        <EmptyCart />
      </header>
    )}
}
