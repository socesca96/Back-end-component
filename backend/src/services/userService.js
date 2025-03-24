const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/utils");

//Crear el usuario-lo vamos a usar en loginController para hacer el registro
exports.registerUser = async ({name,lastName, address, postalCode, town, province, email, password, role, file}) => {

    //Verificamos si existe el usuario
    const user = await userModel.findOne({email});
    if(user){
        const error = new Error("El usuario ya existe")
        error.code = 11000
        throw error
    }
    if(!file) {
        const error = new Error('No se subió ninguna imagen')
        error.code=400
        throw error
    }

    const profileImage = file.filename;
    //Creamos y guardamos el nuevo usuario
    const newUser = new userModel({
        name,
        lastName, 
        address, 
        postalCode, 
        town, 
        province, 
        email, 
        password: await bcrypt.hash(password, 10), 
        role,
        profileImage
    })
    if (file) {
        newUser.profileImage =file.filename;
    }
    await newUser.save()
    return newUser
}

//Login del usuario- lo vamos a usar en loginController
exports.loginUser = async ({email, password}) => {
    const user = await userModel.findOne({email})
    if(!user){
        const error = new Error("El usuario o la contraseña no son válidos")
        error.code = 401
        throw error
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid) {
        const error = new Error("El usuario o la contraseña no son válidos")
        error.code = 401
        throw error
    }
    const payload = {
        _id: user._id,
        name: user.name,
        role: user.role,
    }

    const token = generateToken(payload, false)
    const token_refresh = generateToken(payload, true)

    return{ user, token, token_refresh}

}

//Token de refresco- para el loginController
exports.refreshTokens = (payload) => {
    const token = generateToken(payload, false)
    const token_refresh = generateToken(payload, true)

    return{ token: token, token_refresh: token_refresh}
}

//Obtener la info del usuario 
exports.getUserInfo = async (userId) => {
    const userAux = await userModel.findById(userId)
        
    return userAux
}

//Actualizar usuario
exports.updateUserInfo = async (userId, newUser) => {
    const userAux = await userModel.findByIdAndUpdate(userId, newUser, {
        new:true,
        runValidators: true,
    })
    return userAux
}

//Eliminar Usuario
exports.deleteUser = async (userId) => {
    const userAux = await userModel.findByIdAndDelete(userId)

    return userAux
}
