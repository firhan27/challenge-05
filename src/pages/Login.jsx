import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import NavbarWithoutSearch from "../components/NavbarWithoutSearch";

function Login() {
  return (
    <>
      <NavbarWithoutSearch />
      <Container className="p-5 mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Container>
    </>
  );
}

export default Login;
