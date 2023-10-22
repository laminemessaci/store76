import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/**
 * Renders a container component for a form with the provided children.
 *
 * @param {ReactNode} children - The children to be rendered within the form container.
 * @return {JSX.Element} The rendered form container component.
 */
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
