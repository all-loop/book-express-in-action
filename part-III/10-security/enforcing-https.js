const express = require("express");
const enforceSSL = require("express-enforces-ssl");

const app = express();

// Fuerza al usuario a usar https para continuar con los siguientes
// middlewares
app.enable("trust proxy");
app.use(enforceSSL);

app.get("/", (req, res) => {
  res.end("Usando trust proxy");
});

app.listen(3000);
