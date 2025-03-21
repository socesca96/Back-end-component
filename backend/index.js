const express = require('express');
const cors = require('cors');
require('dotenv').config()
const connectToDataBase = require('./src/db/db')

//Rutas
const productsRouter = require ("./src/Routes/productRouter")
const loginRouter = require ("./src/Routes/loginRouter")
const userRouter = require ("./src/Routes/userRouter")
//Crear app de express
const app = express();
app.use(cors());

//Middleware básico para analizar JSON en las solicitudes
app.use(express.json());

//Conexión a la base de datos
connectToDataBase();

//Rutas principales
app.use('/api/products', productsRouter)
app.use('/api/login', loginRouter)
app.use('/api/user', userRouter)

//Iniciar el servidor
app.listen(3000, () => {
    console.log("Server is running http://localhost:3000");
});

module.exports = app;