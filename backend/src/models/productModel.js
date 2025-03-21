const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    code: {
        type: String,
        unique: true,
        required: true,
    },
    size: {
        type: String,
    },
    colour: {
        type: String,
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

const productsModel = mongoose.model("Products", productSchema, "products");

module.exports = productsModel;