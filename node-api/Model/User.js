const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  city: String,
  occupation: String,
  bio: String,
});

module.exports = mongoose.model("User", User);
