const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");

// Importaciónes
const routes = require("./routes");

// App (servidor)
const app = express();

// Conexión al servidor de BD
mongoose.connect("mongodb://localhost:27017/test");

// Configuraciónes de la App
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "AcavaNuestrAPalabraSecretaParaENcripTar",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(routes);

// Inciamos el servidor para escuchar en el puerto definido
app.listen(app.get("port"), () => {
  console.log(`Server started on port ${app.get("port")}`);
});
