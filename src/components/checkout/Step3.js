import React, {Component} from 'react';

import '../../App.css';

export default class Step3 extends Component{
    constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      address: "",
      city:"",
      state:"",
      zipcode:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  firstnameInput(e) {
    this.setState({ firstname: e.target.value });
  }

  lastnameInput(e) {
    this.setState({ lastname: e.target.value });
  }

  addressInput(e) {
    this.setState({ address: e.target.value });
  }

  cityInput(e) {
    this.setState({ city: e.target.value });
  }

  statesInput(e) {
    this.setState({ states: e.target.value });
  }
  zipcodeInput(e) {
    this.setState({ zipcode: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  componentDidMount() {}

  componentWillUnmount() {}

    render(){
        return(
          <div>
              <div className = "cart">
                <a href="/shop"> 
                  <span class="glyphicon glyphicon-chevron-left"></span> 
                  Continue Shopping
                </a>
                <h1> CHECK OUT </h1>
              </div>
                
              <div className="info">
              <form>
                <div class="firstname">
                 <label> FIRST NAME: </label>
                  <input 
                  name="firstname"
                  type="text"
                  value={this.state.firstname}
                  onChange={this.firstnameInput.bind(this)}
                  placeholder="First Name"/>
                </div>

                <div class="lastname">
                 <label> LAST NAME: </label>
                  <input
                  name="lastname"
                  type="text"
                  value={this.state.lastname}
                  onChange={this.lastnameInput.bind(this)}
                  placeholder="Last Name"/>
                </div>

                <div class = "address">
                  <label> ADDRESS: </label>
                  <input
                    name="address"
                    type="text"
                    value={this.state.address}
                    onChange={this.addressInput.bind(this)}
                    placeholder="Address"
                    />
                </div>

                <div class = "city" >
                  <label> CITY: </label>
                  <input
                  type="text"
                  value={this.state.city}
                  onChange={this.cityInput.bind(this)}
                  placeholder="City"
                  />
                </div>

                <div class = "state">
                  <label> STATE: </label>
                  <input
                  type="text"
                  value={this.state.states}
                  onChange={this.statesInput.bind(this)}
                  placeholder="State"
                  />
                </div>

                <div class = "zipcode">
                  <label> ZIP CODE: </label>
                  <input
                  type="text"
                  value={this.state.zipcode}
                  onChange={this.zipcodeInput.bind(this)}
                  placeholder="Zip Code"
                  />
                </div>
              </form>
              </div>
              
             



        </div>
        );
    }
}
