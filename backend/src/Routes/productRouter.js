const express = require('express')
const { addNewProductController, getProductByIdController, updateProductController, getAllProductController, deleteProductController } = require('../controllers/productController')
const { verifyToken, verifyAdmin } = require('../Middlewares/auth')


const router = express.Router()

//POST- creamos producto solo con token y rol admin
router.post('/',verifyToken, verifyAdmin, addNewProductController)

//GET (público)
router.get('/', getAllProductController)
router.get('/:_id',getProductByIdController)

//PUT- actualizamos producto solo con token y rol admin
router.put('/:_id', verifyToken, verifyAdmin, updateProductController)

//DELETE- borramos producto solo con token y rol admin
router.delete('/:_id',verifyToken, verifyAdmin, deleteProductController)

module.exports = router