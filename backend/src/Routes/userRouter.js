const express = require('express')
const { getUserByIdController, deleteUserController, updateUserController, getOwnUserController } = require('../controllers/userController')
const { verifyToken, verifyAdmin } = require('../Middlewares/auth')
const upload = require('../Middlewares/uploads')

const router = express.Router()

//GET
router.get('/me', verifyToken, getOwnUserController)
router.get('/:id',verifyToken, verifyAdmin,getUserByIdController)

//PUT
router.put('/user', verifyToken, upload.single('profileImage'), updateUserController)

//DELETE
router.delete('/:id', verifyToken, deleteUserController)



module.exports = router