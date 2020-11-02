//*recordar este file es para poner las rutas y no dejar las rutas en nuesto servidor.
import express from "express";
const router = express.Router();

//todo Cotrollers import
import { authUser } from "../controllers/userController.js";

//!Product Routes
router.post("/login", authUser);

export default router;
