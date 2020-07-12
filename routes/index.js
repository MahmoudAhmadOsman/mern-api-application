const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", function (req, res, next) {
  res.send("<h2>Home Page </h2>");
  res.render("index", {
    title: "Home page",
    welcome: "All Posts",
  });
});
// router.get("/api", function (req, res, next) {
//   const data = {
//     name: "Mahmoud Osman",
//     phone: 858777777,
//   };
//   res.json(data);
// });
module.exports = router;
