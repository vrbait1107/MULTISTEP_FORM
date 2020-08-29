import React from "react";
import { Container, Row, Breadcrumb, Col } from "react-bootstrap";

const Confirm = () => {
  return (
    <Container className="mt-5">
      <Breadcrumb>Success</Breadcrumb>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h3 className="text-success">Thank You For Your Submission</h3>
          <h6 className="text-info">
            You will get an email for further instruction
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirm;
