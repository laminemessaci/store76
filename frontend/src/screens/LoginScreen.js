import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import FormContainer from "../components/FormContainer.js";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../actions/userActions";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";
  console.log("location ::", location);

  useEffect(() => {
    if (userInfo) {
      console.log("userInfo ::", userInfo);
      // history.push(redirect);
      navigate(redirect);
    }
  }, [userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className=" bg-dark my-5 rounded-2 p-5 ">
      <FormContainer>
        <h1 className="text-center text-light">Login </h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="my-3 d-flex justify-content-center">
            <Button
              className="m-3 justify-content-center"
              type="submit"
              variant="primary"
            >
              Sign In
            </Button>
          </div>
        </Form>
        <div className="my-3 d-flex justify-content-center">
          <Row className="py-3">
            <Col>
              New Customer?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
              >
                Register
              </Link>
            </Col>
          </Row>
        </div>
        <Row className="py-3 justify-content-center">
          <Col className="text-center text-light fs-6 ">
            Username: "admin@example.com" Password: "123456"
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default LoginScreen;
