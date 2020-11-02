//*recordar primero sacamos las rutas del servidor unsando router = express.Router(); y a hora vamos a enviar la funcionalidad de las rutas a los controladores
//todo llamamos al modelo para hacer las busquedas en la rutas
import User from "../models/userModel.js";
import generatedToken from '../utils/generateToken.js'
import asyncHandler from "express-async-handler";


//! @desc Auth user & get token
//! @routes POST /api/users/login
//! @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email: email });
  //todo esto es para la contraseña con bcrypt | la traemos del modelo
  if (user && (await user.matchPassword(password))) {
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generatedToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
});

export { authUser };
