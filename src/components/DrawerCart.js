import React, { Component } from 'react';
import ReactDrawer from 'react-drawer';
import shoppingcart from '../picture/shopping-cart.png';
import emptycart from '../picture/empty-cart.png';

import 'react-drawer/lib/react-drawer.css';

export default class DrawerCart extends Component{
  constructor() {
    super();

    this.state = {
      open: false,
      position: 'right',
      noOverlay: false
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
  }

  setPosition(e) {
    this.setState({position: e.target.value});
  }

  toggleDrawer() {
    this.setState({open: !this.state.open});
  }

  closeDrawer() {
    this.setState({open: false});
  }

  onDrawerClose() {
    this.setState({open: false});
  }

  renderCart(){
    // if items exist, then render cart, else render nothing(empty cart image)
    if (this.props.items){
      let rowStyle={
        margin: '10px'
      }
      return(
        <div>
          {Object.keys(this.props.items).map((v,i)=>{
            return(
              <div className='row'>
                  <div style={rowStyle} className='col-xs-5 text-left'>{this.props.items[v]} of {v} <br/> ${this.props.prices[v].toFixed(2)} each</div>
                  <div style={rowStyle} className='col-xs-5 text-right'>${(this.props.prices[v] * this.props.items[v]).toFixed(2)}</div>
              </div>
            )
          })}
        </div>
      );
    }
    return(
      <img style={{width:'250px', height:'150px'}} src={emptycart} alt="emptycart" />
    );
  }

  render() {
    return (
      <div >
   	    <img width={35}
             height={35}
             src={shoppingcart}
             onClick={this.toggleDrawer}
             disabled={this.state.open}
             alt="Shopping Cart"
        />
        <ReactDrawer className="drawer"
                     open={this.state.open}
                     position={this.state.position}
                     onClose={this.onDrawerClose}
                     noOverlay={this.state.noOverlay}
                     
        >
          <div style={{overflowY:'scroll', height:'100vh'}}>
          <i onClick={this.closeDrawer} className="icono-cross"></i>
          <h2 className="shoppingcartstyle">Shopping Cart</h2>
          {this.renderCart()}
          <div style={{marginBottom:'10px'}}className='col-xs-12'><a href="/check-out"><button type="button" className="btn btn-dark">CHECKOUT</button></a></div>
          </div>
        </ReactDrawer>
      </div>
    );
  }
}
