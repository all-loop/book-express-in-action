const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("page", {
    appTitle: "Learn Ejs",
    appName: "GOD is DEAD",
  });
});

app.get("/users", (req, res) => {
  res.render("page2", {
    userList: [
      {
        profilePicture: "jiji.com",
        name: "Goku",
        bio: "<p><b>Super Sayayin</b> caido en desgracia</p>",
      },
      {
        profilePicture: "jiji.com",
        name: "Bulma",
        bio: "<p><b>Mamá Guerrera</b> hincha hueas</p>",
      },
    ],
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("404 Not Found!");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
