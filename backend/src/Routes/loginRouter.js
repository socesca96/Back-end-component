const express = require('express')
const { loginUserController, registerUserController, refreshTokensController } = require('../controllers/loginController')


const router = express.Router()

//POST
router.post('/', loginUserController)
router.post('/register', registerUserController)
router.post('/refresh', refreshTokensController)



module.exports = router