import React from "react";
import { Container, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

function NavbarWithoutSearch() {
  return (
    <Navbar bg="transparant navbar-expand-lg fixed-top p-2">
      <Container fluid>
        <div>
          <Navbar.Brand className="text-danger fs-2 Navbar-logo" as={Link} to={"/"}>
            Movielist
          </Navbar.Brand>
        </div>
        <div className="me-3">
          <Button variant="outline-danger" className="Navbar-button" as={Link} to={"/login"}>
            Login
          </Button>
          <Button variant="danger" className="Navbar-button" as={Link} to={"/register"}>
            Register
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarWithoutSearch;
