import React, { Component } from 'react';

export default class EmptyCart extends Component {
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
