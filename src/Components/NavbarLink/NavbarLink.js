import React,{useContext} from "react";
import "./NavbarLink.css";
import { Nav, Navbar} from "react-bootstrap";
import { ReactComponent as Logo } from "./tw-sitelogo-copy.svg";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../Firebase/authCheck.js";

export default function NavbarLink(){
  let buttonStack;
  const currentUser = useContext(AuthContext);
  if(currentUser){
    buttonStack = <Button style={{marginLeft:"27%"}} variant="light">Logout</Button>
  }
  else{
    buttonStack = 
    <div> 
      <Button style={{marginLeft:"27%"}} variant="light" href="/Login">Login</Button>
      <Button style={{marginLeft:"10px"}} variant="primary" href="/Signup">Signup</Button>
    </div>
  }

    return(
        <Navbar className="theNavbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
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
              <Nav.Link style={{color:"white"}} href="/Merch">Merch</Nav.Link>
              <Nav.Link style={{color:"white"}} href="/Videos">Videos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link style={{color:"white"}} href="/XOFund">XOFund</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {buttonStack}
          {/* <Navbar.Brand>
            {buttonStack}
          </Navbar.Brand> */}
        </Navbar>
      );
  }