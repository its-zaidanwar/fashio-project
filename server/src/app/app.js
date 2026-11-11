import express from "express";
import authRouter from "../routes/auth.route.js"
import productRouter from "../routes/products.route.js"
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json())
app.use(cookieParser()) // note cookie parser route ka pehla lag ta hai 
app.use("/api" , authRouter);
app.use("/api" , productRouter)
export default app;