const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const csurf = require("csurf");
const path = require("path");

const app = express();

// Configuración de la aplicación
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(
  session({
    secret: "Esta@esMiPalabraSecretAa!",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(csurf());

// enrutamiento de la aplicación
app.get("/", (req, res) => {
  res.render("index", {
    csrfToken: req.csrfToken(),
  });
});

app.post("/submit", (req, res) => {
  res.send("Form submission worked!");
});

// Middlewares para manjera errores
app.use((err, req, res, next) => {
  if (err.code !== "EBADCSRFTOKEN") {
    next(err);
    return;
  }
  res.status(403);
  res.send("CSRF error.");
});

app.use((err, req, res, next) => {
  res.status(500);
  res.send("Non-CSRF error.");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
