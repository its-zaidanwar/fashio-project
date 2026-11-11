import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
  },

  description: {
    type: String,
    required: true,
    minLength: 10,
  },

  images: {
    type: [
      {
        type: String,
      },
    ],

    validate: {
      validator: (images) => images.length <= 5,
      message: "A product can have at most 5 images",
    },
  },

  price: [
    {
      amount: {
        type: Number,
        required: true,
      },

      currency: {
        type: String,
        required: true,
        enum: ["INR", "USD"],
        default: "INR",
      },
    },
  ],

  sizes: [
    {
      size: {
        type: String,
        required: true,
        trim: true,
      },

      stock: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],

  category: {
    type: String,
    required: true, 
    trim: true,
    lowercase:true,
  },

  seller: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    required: true,
  },

  published: {
    type: Boolean,
    default: false,
  },
});

const productModel = mongoose.model("products", productSchema);
export default productModel;
