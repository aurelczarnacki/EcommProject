import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo.gif";
import chlogo from "../assets/chlogo.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { expand: false };
  }

  handleOffcanvasClose = () => {
    this.setState({ expand: false });
  };
  handleHomePage = (props) => {
    this.props.setPage("home");
    this.handleOffcanvasClose();
  };

  handleContactPage = (props) => {
    this.props.setPage("contact");
    this.handleOffcanvasClose();
  };

  handlePartnershipPage = (props) => {
    this.props.setPage("partnership");
    this.handleOffcanvasClose();
  };

  handleCartPage = (props) => {
    this.props.setPage("cart");
    this.handleOffcanvasClose();
  };

  render() {
    return (
      <>
        {[this.state.expand].map((expand) => (
          <Navbar
            key={expand}
            bg="dark"
            variant="dark"
            expand={expand}
            className="mb-3"
            fixed="top"
          >
            <Container fluid>
              <Navbar.Brand href="#">
                <img className="logo" src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Brand href="#">
                <img className="chlogo" src={chlogo} alt="chlogo" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                width={40}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    ComfyHood
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link onClick={this.handleHomePage}>Home</Nav.Link>
                    <Nav.Link onClick={this.handleCartPage}>Cart</Nav.Link>
                    <NavDropdown
                      title="Contact"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item onClick={this.handleContactPage}>
                        Customer Service
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={this.handlePartnershipPage}>
                        Partnership
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
}
export default NavBar;
