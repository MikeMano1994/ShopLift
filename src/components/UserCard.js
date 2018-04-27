import React, { Component } from 'react';
import {Well, Button} from 'react-bootstrap';
import 'bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import raccoon from '../picture/user.png';
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
            },
            activeTab: 0,
            tabClasses: ['btn btn-default','btn btn-default','btn btn-default']
        };

    }

    componentWillMount(){
        // get all the user stuff from firebase
        fire.database().ref('/users/').child(this.props.getUser().uid).on('value', snapshot => {
            this.setState({user:snapshot.val()});
        });
    }

    renderOrderHistory(){
        if (this.state.user.prices){
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
        else{
            return(
                <div className='text-center'>
                    Hmmmmm, looks like you haven't bought(shoplifted) anything yet! <br/>
                    <a href='/shop'>Go Buy!</a>
                </div>
            );
        }
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

    setActiveTab(oldIndex, newIndex){
        var inactiveClass='btn btn-default';
        var activeClass='btn btn-outline-success my-2 my-sm-0';

        if (oldIndex && newIndex){
            var arr = this.state.tabClasses;
            arr[oldIndex] = inactiveClass;
            arr[newIndex] = activeClass;
            this.setState({tabClasses:arr});
        }
    }

    renderTabContent(index){
        if (index){
            switch (index){
                case 0:
                    return(
                        <div>{this.renderOrderHistory()}</div>
                    );
                case 1:
                    return(
                        <div>{this.renderAddressInfo()}</div>
                    );
                case 2:
                    return(
                        <div>{this.renderCardInfo()}</div>
                    );
                default:
                    console.log('Invalid index rendered!');
            }
        }
    }

    render() {
        var user = this.props.getUser();
        if (user){
            return (
                <div className="user-card">
                    <div className="col-xl-6 col-lg-6 col-sm-6">
                        <div className="card hovercard">
                            <div className="card-background">
                                <img className="card-bkimg" alt="" src="https://www.chicagomag.com/images/2015/0115/C201501-C-Gina-Rodriguez-Primetime-Players-Hannibal-Buress.jpg"/>
                            </div>
                            <div className="useravatar">
                                <img alt="" src={raccoon}/>
                            </div>
                            <div className="card-info">
                                <span className="card-title">{String(user.email)}</span>
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
