import React from 'react';
import DrawerCart from "../DrawerCart";
import UserDropDown from "../UserDropDown";

import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  FormGroup,Form,
  Input, Button} from 'reactstrap';

import logo from "../../picture/logo.jpg";
import user from "../../picture/user.png";


import "../../App.css";


export default class TrucNavbar extends React.Component {

  render() {
    return (
      <div>
        <div>
          <a href="/">
            <img className="App-logo" src={logo} alt="logo" />
          </a>
        </div>
          
          <Navbar color="white" >
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
        </Navbar>
      </div>
    );
  }
}

            
     