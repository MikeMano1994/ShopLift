import React, { Component } from 'react';
import {Well, Button} from 'react-bootstrap';
import 'bootstrap';
import fire from '../fire';

export default class UserCard extends Component {
    constructor(props){
        super(props);
        this.state={
            authed:false,
            user:{
                items: {},
                prices: {},
                address: '',
                city: '',
                state: '',
                zip: '',
                cardName: '',
                cardNumber: '',
                cardExpDate: '',
                CVV: ''
            }
        };
    }

    componentWillMount(){
        this.setState({authed: this.props.authed});
        // get all the user stuff from firebase
        fire.database().ref('/users/').child(this.props.user.uid).on('value', snapshot => {
            var v = snapshot.val();
            this.setState({
                user:{
                    items: v.items,
                    prices: v.prices,
                    address: v.address,
                    city: v.city,
                    state: v.state,
                    zip: v.zip,
                    cardName: v.cardName,
                    cardNumber: v.cardNumber,
                    cardExpDate: v.cardExpDate,
                    CVV: v.CVV
            }});
        });
    }

    renderOrderHistory(){
        return(
            <Well>
                {Object.keys(this.state.user.prices).map((e)=>{
                    return(
                        <div className='row'>
                            <div className='col-md-6 text-left'>
                                {this.state.user.items[e]} of  {e} <br/>
                                {this.state.user.prices[e]}
                            </div>
                            <div className='col-md-6 text-right'>
                                <Button onClick={()=>this.props.addToCart(e)}>Add to Cart</Button>
                            </div>
                        </div>
                    );
                })}
            </Well>
        );
    }

    renderAddressInfo(){
        return(
            <div>
                <p>Address: {this.state.user.address}</p>
                <p>City: {this.state.user.city}</p>
                <p>State: {this.state.user.state}</p>
                <p>Zip Code: {this.state.user.zip}</p>
            </div>
        )
    }

    renderCardInfo(){
        return(
            <div>
                <p>Card Name: {this.state.user.cardName}</p>
                <p>Card Number: {this.state.user.cardNumber}</p>
                <p>Expiration Date: {this.state.user.CVV}</p>
            </div>
        )
    }

    render() {
        if (this.state.authed){
            return (
                <div className="user-card">
                    <div className="col-xl-6 col-lg-6 col-sm-6">
                        <div className="card hovercard">
                            <div className="card-background">
                                <img className="card-bkimg" alt="" src="https://www.chicagomag.com/images/2015/0115/C201501-C-Gina-Rodriguez-Primetime-Players-Hannibal-Buress.jpg"/>
                            </div>
                            <div className="useravatar">
                                <img alt="" src="https://www.chicagomag.com/images/2015/0115/C201501-C-Gina-Rodriguez-Primetime-Players-Hannibal-Buress.jpg"/>
                            </div>
                            <div className="card-info">
                                <span className="card-title">{this.props.user.email}</span>
                            </div>
                        </div>
                        <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
                            <div className="btn-group" role="group">
                                <button type="button" id="stars" className="btn btn-outline-success my-2 my-sm-0" href="#tab1" data-toggle="tab">
                                    <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                                    <div className="hidden-xs">Recent Orders</div>
                                </button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" id="favorites" className="btn btn-default" href="#tab2" data-toggle="tab">
                                    <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                                    <div className="hidden-xs">Address Information</div>
                                </button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" id="following" className="btn btn-default" href="#tab3" data-toggle="tab">
                                    <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                                    <div className="hidden-xs">Payment Information</div>
                                </button>
                            </div>
                        </div>
          
                        <div className="well">
                            <div className="tab-content">
                                <div className="tab-pane fade in active" id="tab1">
                                    {this.renderOrderHistory()}
                                </div>
                                <div className="tab-pane fade in" id="tab2">
                                    {this.renderAddressInfo()}
                                </div>
                                <div className="tab-pane fade in" id="tab3">
                                    {this.renderCardInfo()}
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              )
        }
        else return(<div>OOPS YOU MUST BE LOGGED IN</div>);
  }
}
