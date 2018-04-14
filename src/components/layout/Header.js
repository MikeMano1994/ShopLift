import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import { Navbar } from './Navbar';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      cart: this.props.cartItems,
      mobileSearch: false
    };
  }

  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart
    })
  }

  handleSubmit(e){
    e.preventDefault();
  }

  handleMobileSearch(e){
    e.preventDefault();
    this.setState({
      mobileSearch: true
    })
  }

  handleSearchNav(e){
    e.preventDefault();
    this.setState({
        mobileSearch: false
    }, function() {
        this.refs.searchBox.value = "";
        this.props.handleMobileSearch();
    })
  }

  handleClickOutside(event) {
    const cartNode = findDOMNode(this.refs.cartPreview);
    const buttonNode = findDOMNode(this.refs.cartButton);
    if(cartNode.classList.contains('active')){
        if (!cartNode || !cartNode.contains(event.target)){
            this.setState({
                showCart: false
            })
            event.stopPropagation();
        }
    }
  }

  // componentDidMount() {
  //   document.addEventListener('click', this.handleClickOutside.bind(this), true);
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  // }

  //{ <a className="back-button" href="#" onClick={this.handleSearchNav.bind(this)}><img src="" alt="back"/></a>}
  //  <a className="mobile-search" href="#" onClick={this.handleMobileSearch.bind(this)}><img src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png" alt="search"/></a>
  // <div className="search">
  //   <form action="#" method="get" className={this.state.mobileSearch ? "search-form active" : "search-form"}>
  //     <input type="search" ref="searchBox" placeholder="Search for fresh goods!" className="search-keyword" onChange={this.props.handleSearch}/>
  //     <button className="search-button" type="submit" onClick={this.handleSubmit.bind(this)}></button>
  //   </form>
  // </div>
  
  render() {
    return (
      <header>
        <Navbar />

      </header>
  )}
}
