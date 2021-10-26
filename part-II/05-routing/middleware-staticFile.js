const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "static");
app.use(express.static(publicPath));

// Extendiendo la manera en como se pueden abordar los
// middleware para servir archivos estáticos.

// Middleware para servir archivos estáticos con una ruta especifica.
const photoPath = path.resolve(__dirname, "offensive-photos-folder");
app.use("/offensive", photoPath);

app.use((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.send("Looks like you didn't find a static file.");
});

app.listen(3000);
