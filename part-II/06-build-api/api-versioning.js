const expres = require("express");

const app = expres();

// Router para manejar la version 1 de la API
const apiVersion1 = require("./api1");

// Router para manejar la version 2 de la API
const apiVersion2 = require("./api2");

app.use("/v1", apiVersion1);
app.use("/v2", apiVersion2);

app.listen(3000, () => {
  console.log("App started on port 3000");
});
