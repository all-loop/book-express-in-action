const { response } = require("express");
const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

// Middleware para servir contenido estático
let publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// Routing para responder solicitudes al home
app.get("/", (request, response) => {
  response.end("Welcome to my homepage");
});

// Routing para responder solicitudes a la ruta about
app.get("/about", (request, response) => {
  response.end("Welcome to the about page!");
});

// Routing para responder solicitudes a la ruta weather
app.get("/weather", (request, response) => {
  response.end("The current weather is NICE!");
});

// Middleware Not found
app.use((request, response) => {
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(3000);
