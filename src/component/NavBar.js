import logo from "../images/logo.png";
import arrow_down from "../images/arrow_down.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import { useState, useEffect } from "react";

function NavBar({ background, variant, carousal_ref }) {
  const [active_navlink, setActiveNavLink] = useState("Home");

  return (
    <Navbar
      ref={carousal_ref}
      bg={background}
      variant={variant}
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          href="#Home"
          onClick={() => {
            setActiveNavLink("Home");
          }}
        >
          <img src={logo} style={{ width: 91, height: 44 }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              className="mx-3 d-flex flex-column align-items-center"
              href="#Home"
              onClick={() => {
                setActiveNavLink("Home");
              }}
            >
              {active_navlink == "Home" ? (
                <img src={arrow_down} width={12} height={6} />
              ) : (
                <div style={{ height: 6 }}></div>
              )}
              HOME
            </Nav.Link>
            <Nav.Link
              className="mx-3 d-flex flex-column align-items-center"
              href="#AboutUs"
              onClick={() => {
                setActiveNavLink("About");
              }}
            >
              {active_navlink == "About" ? (
                <img src={arrow_down} width={12} height={6} />
              ) : (
                <div style={{ height: 6 }}></div>
              )}
              ABOUT
            </Nav.Link>

            <Nav.Link
              className="mx-3 d-flex flex-column align-items-center"
              href="#Sectors"
              onClick={() => {
                setActiveNavLink("Sectors");
              }}
            >
              {active_navlink == "Sectors" ? (
                <img src={arrow_down} width={12} height={6} />
              ) : (
                <div style={{ height: 6 }}></div>
              )}
              SECTORS
            </Nav.Link>

            <Nav.Link
              className="mx-3 d-flex flex-column align-items-center"
              href="#Projects"
              onClick={() => {
                setActiveNavLink("Projects");
              }}
            >
              {active_navlink == "Projects" ? (
                <img src={arrow_down} width={12} height={6} />
              ) : (
                <div style={{ height: 6 }}></div>
              )}
              PROJECTS
            </Nav.Link>

            <Nav.Link
              className="mx-3 d-flex flex-column align-items-center"
              href="#Footer"
              onClick={() => {
                setActiveNavLink("Contact");
              }}
            >
              {active_navlink == "Contact" ? (
                <img src={arrow_down} width={12} height={6} />
              ) : (
                <div style={{ height: 6 }}></div>
              )}
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
