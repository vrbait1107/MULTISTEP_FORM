import React from "react";
import {
  Container,
  Row,
  Button,
  Breadcrumb,
  Col,
  Table,
} from "react-bootstrap";

import axios from "axios";

const Confirm = (props) => {
  const postData = () => {
    const dataValue = {
      firstName: props.values.firstName,
      lastName: props.values.lastName,
      email: props.values.email,
      city: props.values.city,
      bio: props.values.bio,
      occupation: props.values.occupation,
    };

    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/registerController",
      headers: {
        "content-type": "application/json",
      },
      data: JSON.stringify(dataValue),
    })
      .then((response) => {
        console.log(response);
        props.nextStep();
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

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

          <Button
            variant="primary"
            onClick={() => {
              postData();
            }}
          >
            Confirm & Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirm;
