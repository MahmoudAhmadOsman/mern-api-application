const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const morgan = require("morgan");

const app = express();
//Configure PORT
const port = process.env.PORT || 5000;

//Bring the routes
const indexRouter = require("./routes/index");
//const postsRouter = require("./routes/api/posts");
const routes = require("./routes/api");

//Database connection
//const DATABASE_URI ="mongodb+srv://atlasbookshop:atlasbookshop2020@cluster0-xtbzt.mongodb.net/atlasbookshop?retryWrites=true&w=majority";
//mongoose.connect(DATABASE_URI || "mongodb://localhost/mernstack2020"
mongoose.connect("mongodb://localhost/mernstack2020", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to the MongoDB database!");
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Use posts route
app.use("/", indexRouter); // Home page

//All posts
//app.use("/api/posts", postsRouter);
app.use("/api", routes);

//HTTP request logger
app.use(morgan("tiny"));
app.listen(port, () => console.log(`Server started on ${port}`));
