const User = require('../models/user');

const usersCtrl = {};

usersCtrl.getUsers = async  (req, res) =>{
    const users = await User.find();
    res.json(users);
}

usersCtrl.createUser = function(){
    
}


module.exports = usersCtrl;