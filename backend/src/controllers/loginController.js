const { refreshTokens, loginUser, registerUser } = require("../services/userService");
const { generateToken } = require("../utils/utils");


exports.registerUserController = async (req, res) => {
    try {
        const { name,lastName, address, postalCode, town, province, email, password, role } = req.body;
        const file = req.file
        const user = await registerUser ({ name, lastName, address, postalCode, town, province,  email, password, role, file })

        const payload = {
            _id: user._id,
            name: user.name,
            role: user.role
        }

        const token = generateToken(payload, false)
        const token_refresh = generateToken(payload, true)

        res.status(201).send({ message: "El usuario se ha registrado correctamente", user, token, token_refresh })
    } catch (error) {
        if(error.code === 11000) {
            return res.status(400).send({ status: "Failed", message: "El usuario ya existe" })
        }
        res.status(500).send({ status: "Failed", error: error.message })
    }
}

exports.loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body
        const { user, token, token_refresh } = await loginUser({email, password})

        return res.status(200).send({ message: "El usuario y la contraseña son correctos", user, token, token_refresh })
    } catch (error) {
        res.status(401).send({ status: "Failed", error: error.message })
    }
}

exports.refreshTokensController = async (req, res) => {
        try {
           const payload = {
            _id: req.payload._id,
            name: req.payload.name,
            role: req.payload.role,
           } 
           const {token, token_refresh } = refreshTokens(payload)
           res.status(200).send({ token, token_refresh });
        } catch (error) {
            res.status(500).send({ status: "Failed", error: error.message })
        }
}