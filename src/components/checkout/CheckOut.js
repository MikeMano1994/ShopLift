/*Documentation: https://github.com/newbreedofgeek/react-stepzilla */

import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';

import './checkout.css';
export default class CheckOut extends Component {


  render() {
    const steps =
    [
      {name: 'Info', component: <Step1/>},
      {name: 'My Profile', component: <Step2/>},
      {name: 'Delivery', component: <Step3/>},
      {name: 'Payment', component: <Step4/>},
      {name: 'Review', component: <Step5/>},
      {name: 'Confirmation', component: <Step6/>},
      
    ]

    return (
      <div className='step-progress'>
        <StepZilla style={{fontsize:"100px"}}         
        steps={steps} 

        showSteps='true'
        showNavigation='true'
        stepsNavigation='true'
        prevBtnOnLastStep='true'
        dontValidate='false'
        preventEnterSubmission='false'
        startAtStep='0'
        nextButtonText='Next'
        backButtonText='Back'
        nextButtonCls='btn btn-prev btn-outline-success my-2 my-sm-0 ml-10 '
        backButtonCls='btn btn-next btn-outline-success my-2 my-sm-0 ml-10'
        nextTextOnFinalActionStep='[default value of nextButtonText]'
        hocValidationAppliedTo = '0'
         />
    </div>
    )
  }
}