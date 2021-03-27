const mongoose = require('mongoose');
const { Schema } = mongoose;


const UsersSchema = new Schema({
    name: { type: String, require: true},
    lastname: { type: String, require: true},
    phone: { type: Number, require:true},
    email: { type: email},
    age: { type:Number, require:true },
    category: { type: String, require:true},
    injuries: { type:String, require:true},
    condicion: { type:String , require:true},
    meet: { type:String, require:true}
});

module.exports = mongoose.model('Users', UsersSchema);