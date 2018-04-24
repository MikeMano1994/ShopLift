import React, {Component} from 'react';

import '../../App.css';

export default class Step4 extends Component{
    constructor(props) {
    super(props);

    this.state = {
      cardname: "",
      cardnumber: "",
      expmonth:"",
      expyear:"",
      cvv:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  cardnameInput(e) {
    this.setState({ cardname: e.target.value });
  }

  cardnumberInput(e) {
    this.setState({ cardnumber: e.target.value });
  }

  expmonthInput(e) {
    this.setState({ expmonth: e.target.value });
  }

  expyearInput(e) {
    this.setState({ expyear: e.target.value });
  }

  cvvInput(e) {
    this.setState({ cvv: e.target.value });
  }


  handleSubmit = e => {
    e.preventDefault();
  };

    render(){
        return(
          <div>
              <div className = "cart">
                <a href="/shop"> 
                  <p><span class="glyphicon glyphicon-chevron-left"></span> 
                  Continue Shopping</p>
                </a>
                <h1 className = "step"> Payment Information </h1>
              </div>
                
              <div className="info">
                
                <div class="firstname">
                 <label> CARD HOLDER NAME: </label>
                  <input 
                  name="cardname"
                  type="text"
                  value={this.state.cardname}
                  onChange={this.cardnameInput.bind(this)}
                  placeholder=" Enter card holder name "/>
                </div>

                <div class="lastname">
                 <label> CREDIT CARD NUMBER: </label>
                  <input
                  name="cardnumber" 
                  type="text"
                  value={this.state.cardnumber}
                  onChange={this.cardnumberInput.bind(this)}
                  placeholder=" Enter card number "/>
                </div>

                <div class = "address">
                  <label> EXPIRATION DATE: </label>
                  <input
                    name="expmonth"
                    type="text"
                    value={this.state.expmonth}
                    onChange={this.expmonthInput.bind(this)}
                    placeholder="Month"
                    />
                    <br></br>
                  <input
                  name="expyear"
                  type="text"
                  value={this.state.expyear}
                  onChange={this.expyearInput.bind(this)}
                  placeholder="Year"
                  />
                </div>

                <div class = "state">
                  <label> CVV: </label>
                  <input
                  type="text"
                  value={this.state.cvv}
                  onChange={this.cvvInput.bind(this)}
                  placeholder=" 3 digit in the back "
                  />
                </div>



              </div>
              
             



        </div>
        );
    }
}
