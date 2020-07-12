const mongoose = require("mongoose");

// Post Schema
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  title: {
    type: String,
    require: true,
  },

  author: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
