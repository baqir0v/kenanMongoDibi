import productModel from "../models/productModel.js";

const productActions = {
    createProduct: async (req,res) =>{
        try {
            const {title,price,image} = req.body
            const newProduct = new productModel({
                title:title,
                image:image,
                price:price
            })
            await newProduct.save()
            res.send(newProduct)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    getAllProducts:async (req,res)=>{
        try {
            const findProduct = await productModel.find({})
            res.send(findProduct)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getProductByID:async (req,res)=>{
        try {
            const {id} = req.params
            const findProduct = await productModel.findById(id)
            res.send(findProduct)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
}
export default productActions