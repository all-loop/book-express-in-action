const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

const app = express();

// Middleware que resgistra todas las solicitudes a nuestro servidor web
// Antes: <------------
// app.use((req, res, next) => {
//   console.log(`Request IP: ${req.url}`);
//   console.log(`Request date: ${new Date()}`);
//   next();
// });
// Después: ------------>
app.use(morgan("short"));

// Middleware para servir archivos estáticos
// Antes: <--------------
// app.use((req, res, next) => {
//   let filePath = path.join(__dirname, "static", req.url);
//   fs.stat(filePath, (err, fileInfo) => {
//     if (err) {
//       next();
//       return;
//     }
//     if (fileInfo.isFile()) {
//       res.sendFile(filePath);
//     } else {
//       next();
//     }
//   });
// });
// Después
const staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

// Middleware para tratar cualquier error 404, sin importar que haya sucedido
app.use((req, res) => {
  res.status(404);
  res.send("File not found!");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
