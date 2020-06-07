import React from "react";
import { Container, Row } from "react-bootstrap";
import UserForm from "./UserForm";

const App = () => {
  return (
    <Container>
      <Row>
        <UserForm />
      </Row>
    </Container>
  );
};

export default App;
