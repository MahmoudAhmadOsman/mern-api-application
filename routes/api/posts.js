const express = require("express");
const router = express.Router();

//Bring the model
const Post = require("../../models/Post");

//@route GET api/posts
//@desc GET all posts
//@access public

router.get("/", async (req, res) => {
  try {
    res.send("All Posts");
    const posts = await Post.find();
    if (!posts) throw Error("No Posts found!");

    res.status(200).json(posts);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// router.get("/", (req, res) => {
//   res.send("All Posts");
//   Post.find()
//     .sort({ date: -1 })
//     .then((posts) => res.json(posts))
//     .catch((error) => {
//       console.log(error);
//     });
// });

//Post to api/posts

router.post("/save", (req, res) => {
  res.send("Post sent");
  console.log("Post Body: ", req.body);
  res.json({
    msg: "We recieved data!",
  });
});

module.exports = router;
