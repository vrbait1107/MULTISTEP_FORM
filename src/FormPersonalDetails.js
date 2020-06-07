import React from "react";
import { Container, Row, Form, Button, Col, Breadcrumb } from "react-bootstrap";

const FormPersonalDetails = (props) => {
  return (
    <Container className="mt-5">
      <Breadcrumb className="text-center text-uppercase">
        Personal Details
      </Breadcrumb>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group>
              <Form.Label>Enter Your First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                defaultValue={props.values.firstName}
                onChange={props.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter Your Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                defaultValue={props.values.lastName}
                onChange={props.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={props.values.email}
                onChange={props.handleChange}
              />
            </Form.Group>
          </Form>
          <Button variant="primary" onClick={props.nextStep}>
            Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FormPersonalDetails;
