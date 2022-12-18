import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { ReactComponent as Logo } from "./tw-sitelogo-copy.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

class NavbarList extends React.Component {
  render(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Logo
              alt=""
              width="185"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Merch</Nav.Link>
              <Nav.Link href="#pricing">Videos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">XOFund</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
  }
}
export default NavbarList;