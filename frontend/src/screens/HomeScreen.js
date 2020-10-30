import React, { useEffect } from "react";
import Product from "../components/Product";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
//todo importa reactBoostrap
import { Row, Col } from "react-bootstrap";
//todo import ListProducts
import { listProducts } from "../actions/productActions";
//Todo Bring dispatch REDUX
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  //todo Dispatch se usa para llamar la accion
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  //!Request to my DB | this is like componentDidMount()
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Lasterst Products</h1>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      )}
    </>
  );
};

export default HomeScreen;
