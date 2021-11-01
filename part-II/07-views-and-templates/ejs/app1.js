const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("example01", {
    name: "Tony Hawk",
    birthyear: 1968,
    career: "skateboarding",
    bio: "<b>Tony Hawk</b> is the coolest skateboarder around.",
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("404! Not Found");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
