//Archivo para conectarme a la base de datos

const mongoose = require('mongoose');

const dbUrl = process.env.MONGO_URL;

const connectToDataBase = async () => {
    try {
        await mongoose.connect(dbUrl, {});
        console.log("Conexión a MongoDB exitosa");
    } catch (error) {
        console.log("Error al conectar con MongoDB", error.message);
    }
};

module.exports = connectToDataBase;