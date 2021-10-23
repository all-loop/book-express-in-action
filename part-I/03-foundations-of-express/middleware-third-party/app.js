const express = require("express");
const http = require("http");
// Morgan es una librería de terceros que soluciona el registro y control
// de peticiones al servidor
const logger = require("morgan");

const app = express();

app.use(logger("short"));
app.use((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, world!");
});

http.createServer(app).listen(3000);
