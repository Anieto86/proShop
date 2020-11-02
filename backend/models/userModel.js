import mongoose from "mongoose";
import bcrypt from "bcryptjs";



const Schema = mongoose.Schema;
//todo Model user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamp: true,
  }
);

//todo Para manejar la contrasenas con bcrypt creamos un methodo | la idea es usarlo en el modelo t llevarlo al controller
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema);
export default User;
