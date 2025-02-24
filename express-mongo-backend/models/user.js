const mongoose = require("mongoose");
const Schema   = require("mongoose").Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;