const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

let publicPath = path.resolve(__dirname, "public");

// Middleware para definir ubicación del contenido
// estático que entregará el servidor.
app.use(express.static(publicPath));

app.use((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Looks like you didn't find a static file.");
});

http.createServer(app).listen(3000);
