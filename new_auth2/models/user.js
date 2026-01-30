const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/authtestapp");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: false },
});

module.exports = mongoose.model("user", userSchema);
