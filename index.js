const path = require("path");
const express = require("express");
const userRoute = require("./routes/user");
const { dbConnect } = require("./services/dbConnect");

// ^^^^^^^^^^^^^^^^=======================================

const app = express();
app.use(express.urlencoded({ extended: false }));
const port = 8000;

// ==============================================  DataBase
dbConnect();

// ==============================================  Ejs Setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// ==============================================  Routes / Path

app.get("/", (req, res) => {
  console.log("Home route accessed");
  res.render("home");
});

app.use("/user", userRoute);

app.listen(port, () =>
  console.log(`Server Running on ➡️ http://localhost:${port}`)
);
