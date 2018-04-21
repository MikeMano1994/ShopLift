import React from 'react';
import DrawerCart from "../DrawerCart";
import UserDropDown from "../UserDropDown";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  FormGroup,Form,
  Input,
  Button
} from 'reactstrap';

import logo from "../../picture/logo.jpg";
import user from "../../picture/user.png";

import "../../App.css";

export default class TrucNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <div>
          <a href="/">
            <img className="App-logo" src={logo} alt="logo" />
          </a>
        </div>

          <Navbar color="white" light expand="md">
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>

            <Nav>
              <Form>
                <Input type="text" placeholder="Search for the fresh!" />
              </Form> {' '}

              <Button type="submit" size="sm" outline color="success" >
                <span class="glyphicon glyphicon-search my-sm-0"/>
              </Button>
            </Nav>


            <Nav navbar >
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink href="/shop">Shop</NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink href="/about-us">About Us</NavLink>
              </NavItem>
            </Nav>

            <Nav>
              <NavItem>
                <UserDropDown />
              </NavItem>

              <NavItem className="emptycart" >
                <a><DrawerCart/></a>
              </NavItem>
            </Nav>

             </Collapse>
        </Navbar>
      </div>
    );
  }
}
