import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavBarDashboard() {
    return (
        <Navbar fixed="top" className="navbar-color navbar navbar-dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Item className="ms-auto p-2">
            <NavLink to="/profile" className="nav-text-color">
              Log out
            </NavLink>
          </Nav.Item>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBarDashboard;