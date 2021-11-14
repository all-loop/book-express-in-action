const express = require("express");
const enforceSSL = require("express-enforces-ssl");
// helmet es un módulo que nos facilita la escritura y configuración
// de cabeceras de nuestra solicitud.
const helmet = require("helmet");
// ms nos permite escribir cadenas entendibles por humanos, para luego hacer
// la conversión a lenguaje máquina. útil para tratar con tiempos.
const ms = require("ms");

const app = express();

app.enable("trust proxy");
app.use(enforceSSL);

// HSTS: HTTPS script transport security. Es un protocolo similar a http que le indica
// al navegador que se mantenga usando HTTPS por un determinado tiempo. Es necesario haber
// establecido o forzado una conexión https de ante mano.
app.use(
  helmet.hsts({
    maxAge: ms("1 year"),
    includeSubdomains: true,
  })
);

//resto de la aplicación ...
