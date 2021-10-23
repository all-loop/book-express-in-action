// Express extiende los objetos request y response con
// métodos y atributos útiles que de otra manera tendriamos que
// implementarlos nosotros desde cero.
const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

const EVIL_IP = "123.45.67.89";

let publicPath = path.resolve(__dirname, "/public");
app.use(express.static(publicPath));

app.use((request, response, next) => {
  if (request.ip === EVIL_IP) {
    response.status(401).send("Not Allowed!");
  } else {
    next();
  }
});

app.get("/", (request, response) => {
  response.end("Welcome to my homepage");
});

app.get("/hello", (request, response) => {
  response.redirect("/hello/DonaldTrumpGoD");
});

app.get("/hello/:who", (request, response) => {
  response.end(`Hello, ${request.params.who}.`);
});

app.get("/otherpage", (request, response) => {
  response.redirect("http://expressjs.com");
});

app.get("/image", (request, response) => {
  response.sendFile(__dirname + "/public/card.png");
});

app.use((request, response) => {
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(3000);
