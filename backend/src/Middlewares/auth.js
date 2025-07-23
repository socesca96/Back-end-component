const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Acceso denegado");
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = payload;
        next();
    } catch (error) {
        try {
            const payload = jwt.verify(token, process.env.SECRET_TOKEN_REFRESH);
            req.user = payload;
            next();
        } catch (error) {
            res.status(401).send("Token expired");
        }
    }
};

const verifyAdmin = async (req, res, next) => {
    try {
        const { role } = req.user;
        if (role !== "admin")
            return res.status(403).send("No tienes permisos");
        next();
    } catch (error) {
        res.status(400).send("Token inválido")
    }
};

module.exports = { verifyToken, verifyAdmin }