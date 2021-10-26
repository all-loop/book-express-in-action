const express = require("express");

const app = express();

// Enrutamiento y mapeo del verbo GET a la ruta /olivia
app.get("/olivia", (req, res) => {
  res.send("Welcome to Olivia's homepage!");
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000);
