const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
  },
  { timestamps: true },
);

//model
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
