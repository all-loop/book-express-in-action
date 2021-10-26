// Esta es la manera más simple de obtener el parámetro enviado
// dentro de la url
const express = require("express");

const app = express();

app.get("/user/:userid", (req, res) => {
  let userId = parseInt(req.params.userid, 10);
  res.send(`User id: ${userId}`);
});

app.use((req, res) => {
  res.status(404).send("Not Found!");
});

app.listen(3000);
