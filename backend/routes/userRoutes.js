//*recordar este file es para poner las rutas y no dejar las rutas en nuesto servidor.
import express from "express";
const router = express.Router();

//todo Cotrollers import
import { authUser, registerUser, getUserProfile } from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js";

router.post("/login", authUser);
router.route("/").post(registerUser)
router.route("/profile").get(protect, getUserProfile)



export default router;