//Generar TOKEN

const jwt = require("jsonwebtoken");

const generateToken = (payload, refreshToken) => {
    if (refreshToken) {
        return jwt.sign(payload, process.env.SECRET_TOKEN_REFRESH, {
            expiresIn: "180min"
        })
    }

    return jwt.sign(payload, process.env.SECRET_TOKEN, {
        expiresIn: "120min",
    })
};

module.exports = { generateToken }