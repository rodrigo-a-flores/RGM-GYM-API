import { Router } from "express";
import { getAllProducts, getProductById } from "../Controller/productController.js";

const productRouter = Router();

productRouter.get('/products', getAllProducts);
productRouter.get('/products/:id', getProductById);

export default productRouter;