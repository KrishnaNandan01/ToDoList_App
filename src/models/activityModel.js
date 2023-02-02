const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    activity :{type:String, required:true},
    time_taken :{type:String, required:true},
    user:{type:String, required:true},
});

const activityModel = mongoose.model("activityModel",activitySchema);

module.exports = activityModel;