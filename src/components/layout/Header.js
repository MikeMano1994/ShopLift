import React, { Component } from 'react';

import { Navbar } from './Navbar';

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

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <header>
        <Navbar />
      </header>
    )}
}
