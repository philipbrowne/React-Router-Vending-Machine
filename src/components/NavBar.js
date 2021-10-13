import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" className="NavBar">
      <Container className="NavContainer">
        <Nav>
          <NavLink exact to="/" className="NavLink">
            Home
          </NavLink>
          <NavLink exact to="/cheetos" className="NavLink">
            Cheetos
          </NavLink>
          <NavLink exact to="/doritos" className="NavLink">
            Doritos
          </NavLink>
          <NavLink exact to="/goldfish" className="NavLink">
            Goldfish
          </NavLink>
          <NavLink exact to="/hersheys" className="NavLink">
            Hersheys
          </NavLink>
          <NavLink exact to="/kitkat" className="NavLink">
            Kit Kat
          </NavLink>
          <NavLink exact to="/lays" className="NavLink">
            Lays
          </NavLink>
          <NavLink exact to="/oreos" className="NavLink">
            Oreos
          </NavLink>
          <NavLink exact to="/reeses" className="NavLink">
            Reeses
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
