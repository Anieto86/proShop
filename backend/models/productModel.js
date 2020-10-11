import mongoose from "mongoose";

//todo Model reviews schema | is also exported with user.
const reviewsSchema = mongoose.Schema;
const reviewsSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    coment: { type: String, required: true },
  },
  {
    timestamp: true,
  }
);


//todo Model product schema
const productSchema = mongoose.Schema;
const productSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewsSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
