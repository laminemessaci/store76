import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Rating from './Rating.js';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className="h-2">
          <Card.Title as="div" className="fs-6 lh-base ">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h5">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {};

export default Product;
