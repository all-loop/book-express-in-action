/** Express con HTTPS
 *
 * Para hacer uso de https debemos hacer uso tanto de una clave privada como de un certificado.
 * Hacemos uso del programa openSSL para obtener nuestra clave privada y una solicitud de
 * certificado.
 *
 * Crea una clave privada:
 * ----------------------
 * $> openssl genrsa -out privatekey.pem 1024
 *
 * Genera una solicitud firmada para obtener un certificado:
 * --------------------------------------------------------
 * $> openssl req -new -key privatekey.pm -out request.pem
 *
 * Una vez obtenida la solicitud de certificado, lo que debemos hacer es obtener un certificado
 * por medio de una autoridad certificadora (CA), como por ejemplo https://letsencrypt.org que
 * es gratis o alguno pagado.
 *
 * Algunos links de referencia:
 * https://letsencrypt.org/docs/certificates-for-localhost/
 * https://letsencrypt.org/getting-started/
 */

const express = require("express");
// https es una librería pre-instalda con node
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();

// ....acá definimos nuestra app
app.get("/", (req, res) => {
  res.send("Bienvenido");
});

app.use((req, res) => {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.send("Not Found!");
});

const httpsOptions = {
  key: fs.readFileSync("path/to/private/key.pem"),
  cert: fs.readFileSync("patg/to/certificate.pem"),
};

// http.createServer(app).listen(80);
https.createServer(httpsOptions, app).listen(3000);
