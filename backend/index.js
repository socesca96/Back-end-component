const express = require('express');
const cors = require('cors');
require('dotenv').config()
const connectToDataBase = require('./src/db/db')

//Rutas

//Crear app de express
const app = express();
app.use(cors());

//Middleware básico para analizar JSON en las solicitudes
app.use(express.json());

//Conexión a la base de datos
connectToDataBase();

//Ruta principal-- ACABAR CUANDO TENGA HECHOS LOS ARCHIVOS DE ROUTER
// app.use('/', )

//Iniciar el servidor
app.listen(3000, () => {
    console.log("Server is running http://localhost:3000");
});

module.exports = app;