import React, { useState, useEffect } from "react";
import Product from "../components/Product";
//todo importa reactBoostrap
import { Row, Col } from "react-bootstrap";

//Todo Axios
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  //!Request to my DB | this is like componentDidMount()
  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get("/api/products");

      setProducts(data);
    }

    fetchProducts();
  },[]);

  return (
    <>
      <h1>Lasterst Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
