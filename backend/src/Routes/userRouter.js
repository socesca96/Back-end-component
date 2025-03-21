const express = require('express')
const { getUserByIdController, deleteUserController, updateUserController } = require('../controllers/userController')
const { verifyToken } = require('../Middlewares/auth')

const router = express.Router()

//GET
router.get('/:id',verifyToken, getUserByIdController )

//PUT
router.put('/:id', verifyToken, updateUserController)

//DELETE
router.delete('/:id', verifyToken, deleteUserController)



module.exports = router