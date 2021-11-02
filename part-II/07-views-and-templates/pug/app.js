const express = require("express");
const path = require("path");
const pug = require("pug");

const app = express();

app.set("view engine", "pug");
app.engine("jade", pug.renderFile);
app.set("views", path.resolve(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("simple-pug");
});

app.get("/example01", (req, res) => {
  res.render("using-layout.jade");
});

app.get("/example02", (req, res) => {
  res.render("using-layout-again.jade");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
