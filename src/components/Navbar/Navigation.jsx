import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar , Container , Nav } from 'react-bootstrap';

const Navigation = () => {
  return (<>
  <Navbar expand="md" className='bg-dark'>
  <Container >
    <Navbar.Brand  className={"text-white"}>LOGO</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white'/>
    <Navbar.Collapse id="basic-navbar-nav" className='text-white'>
      <Nav className="ms-auto">
        <NavLink to={"/"} className={"text-white nav-link links"}>Home</NavLink>
        <NavLink to={"/Aboutus"} className={"text-white nav-link links"}>Aboutus</NavLink>
        <NavLink to={"/Contact"} className={"text-white nav-link links"}>Contact</NavLink>
        <NavLink to={"/Login"} className={"text-white nav-link links"}>Login</NavLink>
        <NavLink to={"/SignUp"} className={"text-white nav-link links"}>SignUp</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Navigation