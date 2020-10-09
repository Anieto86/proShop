import React, {useState, useEffect }from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";

//!Components
import Rating from "../components/Rating";

const ProductScreen = ({ match, color }) => {

  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data)
    }
    fetchProduct();
  },);
  
  return (
    <>
      <Link to={'/'} className="btn btn-light my-3">Go Back</Link>
      <Row>
        <Col md={6}>
          {/* Fluid para mantener la imagen dentro del col */}
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                style={{ color }}
              />
            </ListGroupItem>
            <ListGroupItem>Price:${product.price}</ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                  <Button className="btn-block" type="button" disabled={product.countInStock === 0 }>
                      Add To Cart
                  </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default ProductScreen;
