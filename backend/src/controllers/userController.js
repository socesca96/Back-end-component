const { getUserInfo, updateUserInfo, deleteUser } = require("../services/userService")

exports.getUserByIdController = async (req, res) => {
    try {
        const userId = req.user._id
        const user = await getUserInfo(userId)
        if (!user) {
            return res.status(404).send("Usuario no encontrado")
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message })
    }
}

exports.updateUserController = async (req, res) => {
    try {
        const userId = req.user._id;
        const newUser = req.body;
        if(req.file) {
            newUser.profileImage = req.file.filename;
        }

        const user = await updateUserInfo(userId, newUser)
        if (!user) {
          return res.status(404).send("Usuario no encontrado");
        }
        const userObject= user.toObject()
        delete userObject.password;

        res.status(200).send(userObject);
      } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message });
      }
};

exports.deleteUserController = async (req, res) => {
    try {
        const userId = req.user._id;
        const userDelete = await deleteUser(userId)
        res.status(200).send("Usuario eliminado correctamente")
    } catch (error) {
        res.status(500).send({ status: "Failed", error: error.message });       
    }
}