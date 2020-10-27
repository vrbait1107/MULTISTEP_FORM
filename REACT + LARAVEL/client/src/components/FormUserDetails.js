import React from "react";
import { Container, Row, Form, Col, Button, Breadcrumb } from "react-bootstrap";

const FormUserDetails = (props) => {
  return (
    <Container className="mt-5">
      <Breadcrumb className="text-center text-uppercase">
        Users Details
      </Breadcrumb>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group>
              <Form.Label>Enter Your City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                defaultValue={props.values.city}
                onChange={props.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter Your Occupation</Form.Label>
              <Form.Control
                type="text"
                name="occupation"
                defaultValue={props.values.occupation}
                onChange={props.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter Your Bio</Form.Label>
              <Form.Control
                type="text"
                name="bio"
                defaultValue={props.values.bio}
                onChange={props.handleChange}
              />
            </Form.Group>
          </Form>
          <Button variant="secondary" className="mr-3" onClick={props.prevStep}>
            Back
          </Button>

          <Button variant="primary" onClick={props.nextStep}>
            Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FormUserDetails;
