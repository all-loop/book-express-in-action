const express = require("express");
const path = require("path");

const app = express();

// Middleware que puede o no activar el uso de middleware de errores.
// Un error-middleware se activa siempre y cuando la función next
// se invoca con un argumento.
app.use((req, res, next) => {
  let filePath = path.join(__dirname, req.url);
  res.sendFile(filePath, (err) => {
    if (err) {
      next(new Error("Error sending file!"));
    }
  });
});

// Error-Middleware: Resuelven los errores que suceden en la pila de middlewares dentro
// de express.
// -------->
// Error-middleware para registrar los errores
app.use((err, req, res, next) => {
  console.error(err);
  next(err);
});

// Middleware para responder a errores interos del servidor
app.use((err, req, res, next) => {
  res.status(500);
  res.send("Internal server error.");
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
