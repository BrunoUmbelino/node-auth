const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, max: 35 },
  password: { type: String, required: true, min: 8, max: 1024 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
