const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema ({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    lastName:{
        type: String,
    },
    address:{
        type: String,
    },
    postalCode:{
        type: String,
    },
    town:{
        type: String,
    },
    province:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        required: [true, "El email es obligatorio"]
    },
    password:{
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    //cart?
})

const userModel = mongoose.model("Users", userSchema, "users")

module.exports = userModel