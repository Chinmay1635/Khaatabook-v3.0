const mongoose = require('mongoose');
let userModel = mongoose.Schema({
    username:String,
    name:String,
    email:String,
    password:String,
});

module.exports = mongoose.model("user", userModel);