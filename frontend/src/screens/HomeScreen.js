import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product.js';
import products from '../products.js';

function HomeScreen() {
  return (
    <>
      <h1>Latest Product </h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
