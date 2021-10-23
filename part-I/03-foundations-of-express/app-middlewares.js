const express = require("express");
const http = require("http");

const app = express();

// Middleware para registrar las solicitudes
app.use((request, response, next) => {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

// Middleware final, da respuesta a la solicitud
app.use((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!");
});

http.createServer(app).listen(3000);
