const User = require('../models/user');

const usersCtrl = {};

usersCtrl.getUsers = async  (req, res) =>{
    const users = await User.find();
    res.json(users);
}

usersCtrl.createUser = async (req, res) =>{
    const user = new User(req.body);
    await user.save();
    res.json('Recibido');
}


module.exports = usersCtrl;