import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/**
 * Renders the footer component.
 *
 * @return {JSX.Element} The rendered footer component.
 */
function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copright &copy; Store-76, 2022</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
