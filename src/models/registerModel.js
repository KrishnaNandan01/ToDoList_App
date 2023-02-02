const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    user_name :{type:String, required:true},
    password :{type:String, required:true}
});

const registerModel = mongoose.model("registerModel",registerSchema);

module.exports = registerModel;