import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import { Navbar } from './Navbar';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Navbar />
      </header>
  )}
}
