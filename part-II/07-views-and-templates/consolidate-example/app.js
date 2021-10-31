/**
 * Librería consolidate.js
 * src = https://github.com/tj/consolidate.js/blob/master/examples/views/index.html
 *
 *
 * Existen muchos motores de vistas que pueden ser usados, pero no todos están acondicionados
 * para ser usados con Express. Es acá donde "consolidate.js" es útil, ya que envuelve una gran
 * variedad de motores de vistas, dandonos la posibilidad de trabajar con un motor de vista sin
 * dolores de cabeza al tener que hacer la lógica para que se comunique con Express.
 */

const express = require("express");
const engines = require("consolidate");
const path = require("path");

const app = express();

app.set("view engine", "wal");
app.engine("wal", engines.walrus);
app.set("views", path.resolve(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { title: "consolidate" });
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
