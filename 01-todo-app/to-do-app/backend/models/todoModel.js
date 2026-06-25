const mongoose = require("mongoose");

//todo schema
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title"],
    },
    description: {
      type: String,
      required: [true, "Please enter an description"],
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    createdBy: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);


//model
const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
