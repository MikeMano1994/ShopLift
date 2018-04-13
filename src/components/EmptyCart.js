import React, { Component } from 'react';

export class EmptyCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='empty-cart'>
        <p>empty cart</p>
      </div>
    );
  }
}
