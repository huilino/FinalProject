import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import logo1 from '../assets/images/logo1.PNG';
import '../assets/css/header.css';

export default function Header() {
  return (
    
    <>
    <Navbar expand="lg"  variant="light"  collapseOnSelect>
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo1}
              width="100"
              height="80"
              className="d-inline-block align-top myimg"
            /><p>F</p><span className="span">oo</span><p>d Paradise</p>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1">
            <Nav.Link  as = { NavLink } to ="/">Home</Nav.Link>
            <Nav.Link  as = { NavLink } to ="/searched/:search">Recipe</Nav.Link>
            <Nav.Link  as = { NavLink } to ="/review/">Review</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
) 
}
