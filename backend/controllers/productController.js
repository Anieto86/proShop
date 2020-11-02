//*recordar primero sacamos las rutas del servidor unsando router = express.Router(); y a hora vamos a enviar la funcionalidad de las rutas a los controladores
//todo llamamos al modelo para hacer las busquedas en la rutas
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//! @desc Fetch all the products
//! @routes GET /api/products
//! @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
//! @desc Fetch single product
//! @routes GET /api/products/:id
//! @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export { getProducts, getProductById };
