const express = require("express");
const http = require("http");

const app = express();

// Middleware que registra la solicitud entrante
app.use((request, response, next) => {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

// Middleaware que verifica la autorización de la solicitud
app.use((request, response, next) => {
  let minute = new Date().getMinutes();
  if (minute % 2 === 0) next();
  else {
    response.statusCode = 403;
    response.end("Not authorized");
  }
});

// Middlware final al cual se accede solo si se tiene autorización.
app.use((request, response) => {
  response.end("Secret info: the password is 'swordfish!'");
});

http.createServer(app).listen(3000);
