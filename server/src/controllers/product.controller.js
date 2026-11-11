import { uploadFile } from "../service/storage.service.js";
import productModel from "../models/product.model.js";

// create product
export const createProduct = async (req, res) => {
  try {
    const fileUrl = await Promise.all(
      req.files.map(async (file) => {
        const response = await uploadFile({
          buffer: file.buffer,
          fileName: file.originalname,
        });

        return response.url;
      }),
    );

    console.log(fileUrl);

    const products = await productModel.create({
      title: req.body.title,
      description: req.body.description,
      price: JSON.parse(req.body.price),
      sizes: JSON.parse(req.body.sizes),
      category: req.body.category,
      images: fileUrl,
      seller: req.user.userId,
    });

    return res.status(201).json({
      message: "Product created successfully",
      data: {
        products,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Product creation failed",
      error: error.message,
    });
  }
};

// get all products for users
export const getProductForUsers = async (_, res) => {
  try {
    const products = await productModel.find({ published: true });

    return res.status(200).json({
      message: "All published product data",
      data: {
        products,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to featched products",
      error: error.message,
    });
  }
};

// get all publish product for seller
export const getAllSellerPublishedProduct = async (req, res) => {
  try {
    const products = await productModel.find({
      seller: req.user.userId,
      published: true,
    });
    return res.status(200).json({
      message: "All sellers published products is fetched",
      data: {
        products,
      },
    });
  } catch (error) {
     return res.status(500).json({
      message: "Failed to featched seller published products",
      error: error.message,
    });
  }
};

// get all uploded product for seller
 export const getAllUplodedProductOfSeller =  async (req , res) =>{
    const products = await productModel.find({seller:req.user.userId})

    return res.status(200).json({
      message:"All seller uploded product featched",
      data:{
        products
      }
    })
 }