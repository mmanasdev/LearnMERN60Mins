const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true },
  age: { 
    type: Number, 
    required: true },
  username: { 
    type: String, 
    required: true, 
    unique: true },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;