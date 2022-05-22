import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../../scss/navbar.scss";

const Navigation = () => {
  return (
    <>
      <Navbar fixed="top" expand="md" className="bg-dark navbar-section">
        <Container>
          <Navbar.Brand className={"text-white fw-bolder fs-2"}>
            LOGO
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-white"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="text-white">
            <Nav className="mx-auto">
              <NavLink to={"/"} className={"text-white nav-link fs-5 links"}>
              <i className="fa-solid fa-house mx-2"></i>
                Home
              </NavLink>
              <NavLink to={"/AddProducts"} className={"text-white nav-link fs-5 links"}>
              <i className="fa-solid fa-plus mx-2"></i>
                Add Products
              </NavLink>
              <NavLink to={"/Contact"} className={"text-white nav-link fs-5 links"}>
              <i className="fa-solid fa-phone mx-2"></i>
                Contact
              </NavLink>
              <NavLink to={"/Login"} className={"text-white nav-link fs-5 links"}>
              <i className="fa-solid fa-right-to-bracket mx-2"></i>
                Login
              </NavLink>
              <NavLink to={"/SignUp"} className={"text-white nav-link fs-5 links"}>
              <i className="fa-solid fa-right-from-bracket mx-2"></i>
                SignUp
              </NavLink>
            </Nav>
            <Nav>
              <Nav.Link className="text-white fs-4 links">
              <i className="fa-solid fa-heart mx-2"></i>
              </Nav.Link>
              <Nav.Link className="text-white fs-4 links">
              <i className="fa-solid fa-cart-shopping mx-2"></i>
              </Nav.Link>
              <Nav.Link className="text-white fs-4 links">
              <i className="fa-solid fa-user mx-2"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
