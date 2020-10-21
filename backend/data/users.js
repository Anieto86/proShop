import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
   
  },
  {
    name: "Pepito Doe",
    email: "pepito@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Juan Doe",
    email: "juan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
