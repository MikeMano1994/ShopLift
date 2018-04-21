import React, { Component } from "react";
import { Dropdown,
         DropdownToggle,
         DropdownMenu,
         DropdownItem } from 'reactstrap';
import user from "../picture/user.png";

export default class UserDropDown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>

        <DropdownToggle className = 'dropdown' color ={'white'}>
          <img width={40} height={40} src={user} alt={user}/>
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem><a href="/login">LOG IN</a></DropdownItem>
          <DropdownItem divider />
          <DropdownItem><a href="/signup">SIGN UP</a></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
