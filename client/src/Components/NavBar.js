import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../Images/logo.jpg';

function NavBar() {
    return <Navbar id="nav" expand="lg">
        <Link to="/"><Image src={logo} height="50" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavLink className="nav-link" activeClass="" to="/">Home</NavLink>
                <NavLink className="nav-link" activeClass="" to="/required-docs">Required Documents</NavLink>
                <NavLink className="nav-link" activeClass="" to="/certificate">Passanger Transport Certificate</NavLink>
                <NavLink className="nav-link" activeClass="" to="/rent">Rent A Car</NavLink>
                <NavLink className="nav-link" activeClass="" to="/contact">Contact</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}
export default NavBar;