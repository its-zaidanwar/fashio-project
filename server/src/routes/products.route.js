import express from "express";
import { createProduct, getAllSellerPublishedProduct, getAllUplodedProductOfSeller, getProductForUsers } from "../controllers/product.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/" , authenticate , upload.array("images" , 5) ,  createProduct)
router.get("/products" ,  getProductForUsers)
router.get("/admin/published/products" , authenticate , getAllSellerPublishedProduct)
router.get("/admin/allproducts" , authenticate , getAllUplodedProductOfSeller)

export default router