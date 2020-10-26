//*recordar este file es para poner las rutas y no dejar las rutas en nuesto servidor.

import express from "express";
//todo llamamos al modelo para hacer las busquedas en la rutas
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

//! @desc Fetch all the products
//! @routes GET /api/products
//! @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
   
    res.json(products)
  })
)

//! @desc Fetch single product
//! @routes GET /api/products/:id
//! @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
)

export default router;
