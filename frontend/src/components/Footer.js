import React from "react";
//todo importa reactBoostrap
import { Container, Row, Col } from "react-bootstrap";

//import styled from 'styled-components';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col ClassName="text-center py-3">Copyright © ProShop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
