const express = require('express')
const { addNewProductController, getProductByIdController, updateProductController, getAllProductController, deleteProductController } = require('../controllers/productController')
const { verifyToken, verifyAdmin } = require('../Middlewares/auth')


const router = express.Router()

//POST- creamos producto solo con token y rol admin
router.post('/',verifyToken, verifyAdmin, addNewProductController)

//GET (público)
router.get('/', getAllProductController)
router.get('/:id',getProductByIdController)

//PUT- actualizamos producto solo con token y rol admin
router.put('/:id', verifyToken, verifyAdmin, updateProductController)

//DELETE- borramos producto solo con token y rol admin
router.delete('/:id',verifyToken, verifyAdmin, deleteProductController)

module.exports = router