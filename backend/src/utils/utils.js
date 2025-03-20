//Generar TOKEN

const jwt = require("jsonwebtoken");

const generateToken = (payload, refreshToken) => {
    if (refreshToken) {
        return jwt.sign(payload, process.env.SECRET_TOKEN_REFRESH, {
            expiresIn: "60min"
        })
    }

    return jwt.sign(payload, process.env.SECRET_TOKEN, {
        expiresIn: "15min",
    })
};

module.exports = { generateToken }