const productModel = require("../models/productModel")
const { getAllProducts, getProductById, addNewProduct, updateProduct, deleteProduct } = require("../services/productService")


exports.getAllProductController = async (req, res) => {
    try {
        const products = await getAllProducts();
        if (products.length === 0) {
            return res.status(200).send({
                status:"Success",
                data: [],
                message: "No hay productos en la base de datos",
            })
        }
        return res.status(200).send({
            status: "Success",
            data: products,
        })
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message }) 
    }
}

exports.getProductByIdController = async (req, res) => {
    try {
        const productId = req.params.id
        const products = await getProductById(productId)
        if (!products) {
           return res.status(404).send("Producto no encontrado")
        }
        res.status(200).send({
            status: "Success",
            data: product
        })
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message })
    }
}

exports.addNewProductController = async (req, res) => {
    try {
        const newProduct = await addNewProduct(req.body)
        res.status(201).send({status: "Success", message: "Se ha añadido correctamente", product: newProduct})
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message })
    }
}

exports.updateProductController = async (req, res) => {
    try {
        const productId = req.params.id
        const productUpdated = req.body

        const newProduct = await updateProduct(productId, productUpdated)

        if(!newProduct){
            return res.status(404).send({ status: "Failed", message: "Producto no encontrado" })
        }
        res.status(200).send({product: newProduct})
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message })   
    }
}

exports.deleteProductController = async (req, res) => {
    try {
        const productId =req.params.id
        const product = await deleteProduct(productId)
        if(!product){
            return res.status(404).send({ status:"Failed", message: "Producto no encontrado" })
        }
        res.status(200).send({message: "Se ha eliminado correctamente"})
    } catch (error) {
        res.status(500).send({ status:"Failed", error: error.message })
    }
}