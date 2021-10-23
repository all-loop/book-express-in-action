const express = require("express");
const http = require("http");

const app = express();

app.get("/hello/:who", (request, response) => {
  // Esto tiene un problema de seguridad que se debe remarcar, se abordará más adelante.
  response.end(`Hello, ${request.params.who}.`);
});

app.use((request, response) => {
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(3000);
