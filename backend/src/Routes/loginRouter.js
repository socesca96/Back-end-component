const express = require('express')
const { loginUserController, registerUserController, refreshTokensController } = require('../controllers/loginController')
const upload = require('../Middlewares/uploads')


const router = express.Router()

//POST
router.post('/', loginUserController)
router.post('/register',upload.single('profileImage'), registerUserController)
router.post('/refresh', refreshTokensController)



module.exports = router