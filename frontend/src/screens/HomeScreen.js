import React, { useEffect } from "react";
import Product from "../components/Product";
//todo importa reactBoostrap
import { Row, Col } from "react-bootstrap";

//todo import ListProducts
import { listProducts } from "../action/productActions";

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
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
