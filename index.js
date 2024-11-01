const path = require("path");
const express = require("express");

require("dotenv").config();

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

const Blog = require("./models/blog");

const cookieParser = require("cookie-parser");
const { dbConnect } = require("./services/dbConnect");
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");

// ^^^^^^^^^^^^^^^^=======================================

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

const port = process.env.PORT || 8000;

// ==============================================  DataBase
dbConnect();

// ==============================================  Ejs Setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// ==============================================  Routes / Path

app.get("/", async (req, res) => {
  console.log("Home route accessed");

  const allBlog = await Blog.find({});
  console.log(allBlog);

  res.render("home", {
    user: req.user,
    blogs: allBlog,
  });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(port, () =>
  console.log(`Server Running on ➡️ http://localhost:${port}`)
);
