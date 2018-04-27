/*Documentation: https://github.com/newbreedofgeek/react-stepzilla */

import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';

import fire from '../../fire';

import './checkout.css';
import '../../App.css'

export default class CheckOut extends Component {
constructor(props) {
    super(props);
    this.state = {};

    this.sampleStore = {
      firstname: '',
      lastname: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      cardname: '',
      cardnum: '',
      expmonth: '',
      expyear: '',
      cvv: '',
      orderHistory: {}
    };
  }

  componentWillMount(){
    fire.database().ref('/users/').child(this.props.getUser().uid).on('value', snapshot=>{
      var v = snapshot.val();
      this.setState({
        firstname: v.firstName,
        lastname: v.lastName,
        address: v.address,
        city: v.city,
        state: v.state,
        zipcode: v.zip,
        orderhistory: v.orderHistory
      });
    }).bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  getStore() {
    return this.sampleStore;
  }

  updateStore(update) {
    this.sampleStore = {
      ...this.sampleStore,
      ...update,
    }
  }


  render() {
    const steps =
    [
      {name: 'Cart', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'My Profile', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Shipping', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Payment', component: <Step4 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Review', component: <Step5 cart={this.props.cart} prices={this.props.prices} getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Confirmation', component: <Step6 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      
    ]

    return (
      <div className = 'checkout'>
        <div className='step-progress'>
          <StepZilla         
          steps={steps} 

          preventEnterSubmission={true}
          prevBtnOnLastStep={false}
          startAtStep= {0} 
          nextButtonText={' '}
          backButtonText={' '}
          nextButtonCls={'btn btn-prev btn-outline-success my-2 my-sm-0 ml-10 glyphicon glyphicon-chevron-right'}
          backButtonCls={'btn btn-next btn-outline-success my-2 my-sm-0 ml-10 glyphicon glyphicon-chevron-left'}
          nextTextOnFinalActionStep={' '}
          hocValidationAppliedTo = {[]}
         
           />
      </div>
    </div>
    )
  }
}