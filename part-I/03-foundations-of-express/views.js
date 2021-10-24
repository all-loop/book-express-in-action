const express = require("express");
const path = require("path");

const app = express();

// Indicamos la carpeta donde se ubicarán nuestras vistas
app.set(path.resolve("views", __dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index", { message: "Hey everyone! This is my webpage." });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en localhost:3000");
});
