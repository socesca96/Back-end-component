const productsModel = require ("../models/productModel")


//Obtener todos los productos
exports.getAllProducts = async () => {
    const productAux = await productsModel.find();

    return productAux
}

//Obtener producto por ID
exports.getProductById = async (productId) => {
    const productAux =await productsModel.findById(productId)
    
    return productAux
}

//Añadir nuevo producto- solo ADMIN
exports.addNewProduct = async (productData) => {
    const newProduct = new productsModel(productData);
    await newProduct.save();

    return newProduct;
}

//Editar un producto - solo ADMIN
exports.updateProduct = async (productId, newProduct) => {
    const productAux = await productsModel.findByIdAndUpdate(productId, newProduct, {new: true, runValidators: true})

    return productAux
}

//Eliminar producto - solo ADMIN
exports.deleteProduct = async (productId) => {
    const productAux = await productsModel.findByIdAndDelete(productId)

    return productAux
}

