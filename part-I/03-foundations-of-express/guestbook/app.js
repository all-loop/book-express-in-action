// Requerimos todos los módulos que necesitamos
const http = require("http");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const { response } = require("express");

// Creamos la una app express
const app = express();

// Indicamos donde ubicar las vistas de nuestra aplicación, y
// definimos el motor de plantilla utilizado
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Arreglo que almacenará nuestras entradas
let entries = [];
// Hacemos visible el arreglo en todas nuestras vistas
app.locals.entries = entries;

// Middleware para registrar las solicitudes a nuestro servidor
app.use(logger("dev"));

// Middleware para parsear el cuerpo de las solicitudes, en especial las
// que usen el verbo POST
app.use(bodyParser.urlencoded({ extended: false }));

// Enrutamiento de la aplicación
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/new-entry", (req, res) => {
  res.render("new-entry");
});

app.post("/new-entry", (req, res) => {
  if (!req.body.title || !req.body.body) {
    res.status(400).send("Entries mus have a title and a body.");
    return;
  }
  entries.push({
    title: req.body.title,
    body: req.body.body,
    published: new Date(),
  });
  res.redirect("/");
});

app.use((req, res) => {
  res.status(404).render("404");
});

http.createServer(app).listen(3000, () => {
  console.log("Guestbook app started on port 3000.");
});
