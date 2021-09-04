import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { GoogleLogout } from "react-google-login";

import { Navbar, Nav, Container, Dropdown, Image } from "react-bootstrap";

import PersonLightIcon from "../assets/images/person-light.svg";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

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
                {/* <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item> */}
                <GoogleLogout
                  clientId="863171998753-cvajles56ogr9jqp93jrg0umk5rsk7oh.apps.googleusercontent.com"
                  onLogoutSuccess={() => handleLogout()}
                  render={(renderProps) => (
                    <Dropdown.Item
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Logout
                    </Dropdown.Item>
                  )}
                ></GoogleLogout>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
