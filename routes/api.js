const express = require("express");
const router = express.Router();
//Bring the model
const Post = require("../models/Post");

//@route GET api/posts
//@desc GET all posts
//@access public

// router.get("/", async (req, res) => {
//   res.send("All Posts");
// });

router.get("/", (req, res) => {
  Post.find({})
    .sort({ createdAt: "desc" })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

// //Post to routes/api

router.post("/save", (req, res) => {
  const data = req.body;

  const post = new Post(data);

  post.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Ooops, internal server errors" });
      return;
    }
    // Post
    return res.json({
      msg: "Success: data has been saved!",
    });
  });
});

module.exports = router;
