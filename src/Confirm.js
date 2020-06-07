import React from "react";
import {
  Container,
  Row,
  Button,
  Breadcrumb,
  Col,
  Table,
} from "react-bootstrap";

const Confirm = (props) => {
  return (
    <Container className="mt-5">
      <Breadcrumb>Confirm Your Details</Breadcrumb>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Table borderless>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{props.values.firstName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{props.values.lastName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{props.values.email}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{props.values.city}</td>
              </tr>
              <tr>
                <td>Occupation</td>
                <td>{props.values.occupation}</td>
              </tr>
              <tr>
                <td>Bio</td>
                <td>{props.values.bio}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="secondary" className="mr-3" onClick={props.prevStep}>
            Back
          </Button>

          <Button variant="primary" onClick={props.nextStep}>
            Confirm & Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirm;
