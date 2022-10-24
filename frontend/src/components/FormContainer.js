import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Container className="inline-flex  py-4  justify-content-center">
      <Row>
        <Col className="container-fluid">{children}</Col>
        {/* <Col className="container-fluid"></Col> */}
      </Row>
    </Container>
  );
};

export default FormContainer;
