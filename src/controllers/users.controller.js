const usersCtrl = {};

const UserModel = require('../model/User');

usersCtrl.getUser = async (req,res) => {
    const users = await UserModel.find();
    res.json(users)
}

usersCtrl.crearUser = async (req,res) => {
    const { nombre, apellido, cedula, direccion, username, email, password} = req.body;
    const newUser = new UserModel({
        nombre,
        apellido,
        cedula,
        direccion,
        username,
        email,
        password
    });
    await newUser.save();
    res.json('Usuario Creado')
}

usersCtrl.borrarUser = async (req,res) => {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json('Usuario eliminado')
}

module.exports = usersCtrl;