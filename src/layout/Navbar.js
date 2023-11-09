import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <BootstrapNavbar bg="info" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            src="https://js-beginners.github.io/filter-project/img/logo.svg"
            alt="Dessert & Beverage"
            className="logo"
          />
          <span className="navbar-title">Confetti & Sugar</span>
        </Link>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Nav>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
          </Nav>
          <Nav>
            <Link to="/adddessert" className="nav-link">
              Add Dessert
            </Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;




