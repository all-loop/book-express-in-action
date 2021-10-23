const express = require("express");
const http = require("http");

const app = express();

app.use(function (request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello, World!");
});

http.createServer(app).listen(3000);
