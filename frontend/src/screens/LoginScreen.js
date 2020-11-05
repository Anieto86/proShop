import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import FormContainer from "../components/FormContainer.js";
import { login } from "../actions/userActions.js";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

 //todo useSelector Allows you to extract data from the Redux store
  const userLogin = useSelector((state) => state.userLogin);
 
  // todo esto userLogin viene de el store que tiene los estado guardados en userReducer
  const { loading, error , userInfo} = userLogin;

  // todo redirect | es donde esta en link de registro al final de este archivo
  const redirect = location.search ? location.search.split("=")[1] : "/";

  //todo para chakear userInfo
  useEffect(() => {
      if(userInfo){
          history.push(redirect)
      }
  },[history, userInfo, redirect])


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  };

  return (
    <FormContainer>
      <h1>Sing in</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" varian="primary">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redicrect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
