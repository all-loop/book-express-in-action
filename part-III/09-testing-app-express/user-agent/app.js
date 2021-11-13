const express = require("express");
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// Restructuramos la solicitud GET para acomodarnos a las pruebas
// de texto y HTML.
app.get("/", (req, res) => {
  const userAgent = req.headers["user-agent"] || "none";
  if (req.accepts("html")) {
    res.render("index", { userAgent });
  } else {
    res.type("text");
    res.send(userAgent);
  }
});

app.listen(app.get("port"), () => {
  console.log("App started on port " + app.get("port"));
});

module.exports = app;
