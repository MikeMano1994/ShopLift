import React, { Component } from "react";
import DrawerCart from "../DrawerCart";
import UserDropDown from "../UserDropDown";
import { Navbar,
         Nav,
         FormGroup,
         FormControl,
         Button,
         NavItem,
         NavDropdown,
         MenuItem
        } from 'react-bootstrap';

import logo from "../../picture/logo.jpg";
import user from "../../picture/user.png";

import "../../App.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="/">
            <img className="App-logo" src={logo} alt="logo" />
          </a>
        </div>
        <Navbar>
          <Navbar.Toggle />
          <Navbar.Collapse>

        {/*<div className="bignavbar">
          <nav className="navbar navbar-expand-lg navbar-white bg-white">
            <ul className="navbar-nav mr-auto">*/}

          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search for the fresh!" />
            </FormGroup>{' '}
            <Button type="submit">
              <i class="glyphicon glyphicon-search" />
            </Button>
          </Navbar.Form>

          <Nav>
             <NavItem className="nav-link" href="/">Home</NavItem>
             <NavItem className="nav-link" href="/shop">Shop</NavItem>
             <NavItem className="nav-link" href="/contact">Contact</NavItem>
             <NavItem className="nav-link" href="/about-us">About Us</NavItem>
          </Nav>

          <Nav pullRight>
            <ul className="nav">
              <li><UserDropDown /></li>
              <li className="emptycart"><DrawerCart /></li>
            </ul>
          </Nav>

            {/*</ul>
          </nav>
        </div>*/}

         </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}



/*// <li className="nav-item">
//   <form className="form-inline my-0 my-sm-0">
//     <input
//       className="form-control mr-sm-2"
//       type="search"
//       placeholder="Search for an item"
//       aria-label="Search"
//     />
//     <button
//       className="btn btn-outline-success my-2 my-sm-0"
//       type="submit"
//     >
//       <i class="glyphicon glyphicon-search" />
//     </button>
//   </form>
// </li>
*/
// <li className="nav-item active">
//   <a className="nav-link" href="/">
//     Home <span className="sr-only">(current)</span>
//   </a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="/shop">
//     Shop
//   </a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="/contact">
//     Contact
//   </a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="/about-us">
//     About Us
//   </a>
// </li>

// <Nav pullRight>
//   <ul className="nav navbar-right">
//     <li>
//       <UserDropDown />
//     </li>
//     <li className="emptycart">
//       <a><DrawerCart /></a>
//     </li>
//   </ul>
// </Nav>
