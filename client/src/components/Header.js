import React from "react";

import { Navbar, Nav, Container, Dropdown, Image } from "react-bootstrap";

import PersonLightIcon from "../assets/images/person-light.svg";

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" id="site-navbar">
      <Container className="ps-2">
        <Navbar.Brand as="a" href="/home">
          Memories
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-basic"
                className="shadow-non"
              >
                <Image src={PersonLightIcon} className="mb-0" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
