const express = require("express");
const path = require("path");
const moment = require("moment");
const mongoose = require("mongoose");

const morgan = require("morgan");

const app = express();
//Configure PORT
const port = process.env.PORT || 5000;

//Bring the routes
const indexRouter = require("./routes/index");
// const postsRouter = require("./routes/api/posts");

const routes = require("./routes/api");

//Database connection
//const MONGODB_URI ="database_link_goes_here";
//mongoose.connect(DATABASE_URI || "mongodb://localhost/database_name"
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mernstack2020",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Connected to the MongoDB database!");
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Use posts route
app.use("/", indexRouter); // Home page

//HTTP request logger
app.use(morgan("tiny"));
//All posts
// app.use("/api/posts", postsRouter);
app.use("/api", routes);

//Check if the connection variable //3
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(port, () => console.log(`Server started on ${port}`));
