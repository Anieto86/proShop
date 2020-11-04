//*recordar primero sacamos las rutas del servidor unsando router = express.Router(); y a hora vamos a enviar la funcionalidad de las rutas a los controladores
//todo llamamos al modelo para hacer las busquedas en la rutas
import User from "../models/userModel.js";
import generatedToken from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";

//! @desc Auth user & get token
//! @routes POST /api/users/login
//! @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //todo la busqueda del usuario en la DB es usando el email
  const user = await User.findOne({ email: email });
  //todo esto es para la contraseña con bcrypt | la traemos del modelo
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generatedToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//! @desc Register a nwe user
//! @routes POST /api/users/login
//! @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generatedToken(user._id),
    });
  }else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

//! @desc GET user profile
//! @routes GET /api/users/profile
//! @access Prive
const getUserProfile = asyncHandler(async (req, res) => {
  const user = User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

export { authUser, registerUser, getUserProfile };
