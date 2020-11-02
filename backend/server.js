import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

//Todo importando las rutas al servidor
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"



dotenv.config();

connectDB();
const app = express();

//todo esto permite aceptar JSON data in the body | el famoso body-parse |
app.use(express.json());

//todo ROUTES
app.get("/", (req, res) => {
  res.send("Api is running, arde papi ");
});

//todo Aca vienen las rutas importadas de productRoutes
app.use('/api/products', productRoutes)
//todo Aca vienen las rutas importadas userRoutes
app.use('/api/users', userRoutes)


const PORT = process.env.PORT || 5000;
//todo Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`.yellow.bold);
});
