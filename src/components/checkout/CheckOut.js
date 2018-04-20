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
import '../../App.css'

export default class CheckOut extends Component {


  render() {
    const steps =
    [
      {name: 'Cart', component: <Step1/>},
      {name: 'My Profile', component: <Step2/>},
      {name: 'Delivery', component: <Step3/>},
      {name: 'Payment', component: <Step4/>},
      {name: 'Review', component: <Step5/>},
      {name: 'Confirmation', component: <Step6/>},
      
    ]

    return (
      <div className = 'checkout'>
        <div className='step-progress'>
          <StepZilla         
          steps={steps} 

          preventEnterSubmission={true}
          prevBtnOnLastStep={false}
          startAtStep= {window.sessionStorage.getItem('step') ? 0 : parseFloat(window.sessionStorage.getItem('step'))}
          onStepChange={(step) => window.sessionStorage.setItem('step', step)}
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