const express = require("express");
const path = require("path");

const app = express();

// Extendiendo la manera en como se pueden abordar los
// middleware para servir archivos estáticos.

const publicPath = path.resolve(__dirname, "static");
app.use(express.static(publicPath));
// Tratando con múltiples enrutamientos a directorios públicos
const userUploadsPath = path.resolve(__dirname, "uploads");
app.use(express.static(userUploadsPath));

/* Si queremos diferenciar sin ambiguedad cuando acceder a un recurso que puede
estar en ambos directorios estáticos, siempre podemos especificar la ruta desde la 
cuál se llamará el directorio. Por ejemplo:

app.use("/public", express.static("publicPath"));
app.use("/uploads", express.static("userUploadsPath"));

*/

// Middleware para servir archivos estáticos con una ruta especifica.
const photoPath = path.resolve(__dirname, "offensive-photos-folder");
app.use("/offensive", photoPath);

app.use((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.send("Looks like you didn't find a static file.");
});

app.listen(3000);
