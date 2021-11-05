const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");

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
// body-parser nos permite parsear los formularios HTML
app.use(bodyParser.urlencoded({ extended: false }));
// cookie-parser se encarga de parsear las cookies desde el navegador, y es requerido para
// administrar la sesión de los usuarios.
app.use(cookieParser());
// express-session nos permite almacenar las sesiones de los usuarios en diferentes navegadores
// webs.
app.use(
  session({
    // secret es un conjunto de caracteres random que usamos para encriptar
    // la sesión desde cliente.
    secret: "AcavaNuestrAPalabraSecretaParaENcripTar",
    // resave es requerido. Cuando tiene un valor de true la sesión se actualiza incluso
    // si esta no se ha modificado.
    resave: true,
    // saveUninitialized es requerido. Restablece las sesiones que no estan inicializadas.
    saveUninitialized: true,
  })
);
// flash facilita la comunicación de mensajes de error.
app.use(flash());
// Inicializa el módulo de passport.
app.use(passport.initialize());
// Maneja las sesiones de passport.
app.use(passport.session());
app.use(routes);

// Inciamos el servidor para escuchar en el puerto definido
app.listen(app.get("port"), () => {
  console.log(`Server started on port ${app.get("port")}`);
});
