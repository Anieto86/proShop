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

//! @desc Register a new user
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
//! @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

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


//! @desc UPDATE user profile
//! @routes PUT /api/users/profile
//! @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
  user.name = req.bady.name || user.name
  user.email = req.body.email || user.email

  if (req.body.password){
    user.password = req.body.password
  }

  const updatedUser = await user.save()
  res.json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
    token: generatedToken(updatedUser._id),
  });

  } else {
    res.status(401);
    throw new Error("User not found");
  }
});



export { authUser, registerUser, getUserProfile , updateUserProfile };
