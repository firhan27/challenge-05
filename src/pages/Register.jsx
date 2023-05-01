import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import NavbarWithoutSearch from "../components/NavbarWithoutSearch";

function Register() {
  return (
    <>
      <NavbarWithoutSearch />
      <Container className="p-5 mt-5">
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-light">Name</Form.Label>
          <Form.Control type="email" placeholder="Full Name" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-light">Repeat Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Register
        </Button>
      </Container>
    </>
  );
}

export default Register;
