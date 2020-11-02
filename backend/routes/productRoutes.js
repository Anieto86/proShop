//*recordar este file es para poner las rutas y no dejar las rutas en nuesto servidor.
import express from "express";
const router = express.Router();

//todo Cotrollers import
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";


//!Product Routes
router.route("/").get(getProducts)
router.route("/:id").get(getProductById)

 



export default router;
