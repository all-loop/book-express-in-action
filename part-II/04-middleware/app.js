const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Middleware que resgistra todas las solicitudes a nuestro servidor web
app.use((req, res, next) => {
  console.log(`Request IP: ${req.url}`);
  console.log(`Request date: ${new Date()}`);
  next();
});

// Middleware para servir archivos estáticos
app.use((req, res, next) => {
  let filePath = path.join(__dirname, "static", req.url);
  fs.stat(filePath, (err, fileInfo) => {
    if (err) {
      next();
      return;
    }
    if (fileInfo.isFile()) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
