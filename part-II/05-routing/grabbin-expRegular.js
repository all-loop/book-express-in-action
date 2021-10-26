// Obteniendo la información de una url por medio de
// expresiones regulares.
const express = require("express");

const app = express();

app.get(/^\/users\/(\d+)$/, (req, res) => {
  let userId = parseInt(req.params[0], 10);
  res.send(`User Id: ${userId}`);
});

app.get(/^\/user\/(\d+)-(\d+)$/, (req, res) => {
  let startId = parseInt(req.params[0], 10);
  let enId = parseInt(req.params[1], 10);
  res.send(`(start ID, end ID) = (${startId}, ${enId})`);
});

let horribleRegexp =
  /^([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/i;
app.get(horribleRegexp, (req, res) => {
  let uuid = req.params[0];
  res.send(`Horrible regexp: ${uuid}`);
});

app.listen(3000);
