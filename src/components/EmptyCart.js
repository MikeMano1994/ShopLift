import React, { Component } from 'react';

import shoppingcart from '../picture/shopping-cart.png';

export class EmptyCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='empty-cart'>
        <img width={35} height={35} src={shoppingcart} />
      </div>
    );
  }
}
