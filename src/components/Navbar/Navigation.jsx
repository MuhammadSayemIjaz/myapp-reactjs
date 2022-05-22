import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar , Container , Nav } from 'react-bootstrap';

const Navigation = () => {
  return (<>
  <Navbar expand="md">
  <Container >
    <Navbar.Brand to={"/"} className={"text-white"}>My Bank</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white'/>
    <Navbar.Collapse id="basic-navbar-nav" className='text-white'>
      <Nav className="ms-auto">
        <NavLink to={"/"} className={"text-white nav-link links"}>Dashboard</NavLink>
        <NavLink to={"/Accounts"} className={"text-white nav-link links"}>Accounts</NavLink>
        <NavLink to={"/Transactions"} className={"text-white nav-link links"}>Transactions</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Navigation