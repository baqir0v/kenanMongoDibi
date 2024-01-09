import express from "express"
import productActions from "../controllers/productController.js"
const router = express.Router()
    
router.get("/",productActions.getAllProducts)
router.get("/:id",productActions.getProductByID)
router.post("/",productActions.createProduct)
router.delete("/:id",productActions.deleteProductByID)

export default router