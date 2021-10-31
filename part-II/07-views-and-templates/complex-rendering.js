/**
 * Complejidad en el renderizado de vistas, usando ejs y pug (jade).
 * ----------------------------------------------------------------
 *
 * Algunas acotaciones cuando se llama al método render:
 *
 * -.1 Express construye un objeto de contexto siempre que llama al método render. Este objeto
 * es pasado al motor de vistas cuando se renderiza, y son simplemente las variables disponibles
 * en la vistas. Por ejemplo: appName y userAgent en las tres llamadas, y currentUser o urlAttempted
 * según sea el caso.
 *
 * -.2 Uno decide si el almacenamiento en caché se habilita. Express almacena en caché solamente la
 * búsqueda o ruta del archivo de vista y el motor de vista asignado, pero nunca el proceso de
 * renderizar una vista.
 *
 * app.enabled("view cache") --> Habilita el cache en modo de desarrollo
 * app.enabled("view cache") --> Deshabilita el cache en modo de desarrollo
 *
 * -.3 Buscar donde reside el archivo y que motor de vista usar siempre que no haya
 *  sido agreago a caché previamente, caso contrario salta al paso final.
 *
 * -.4 Si no proporcionamos una extensión de archivo, Express añade el valor por defecto que
 * especificamos. Si no se especifica ninguno, Express genera un error.
 *
 * -.5 Express busca por la extensión de tu archivo para determinar que motor de vista usar.
 *
 * -.6 Express busca el archivo en su directorio de vistas.
 *
 * -.7 Express almacena en caché toda la lógica de búsqueda si corresponde.
 *
 * -.8 Se renderiza la vista.
 */

const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

app.locals.appName = "Song Lyrics";

app.set("view engine", "jade");
app.set("views", path.resolve(__dirname, "views"));
app.engine("html", ejs.renderFile);

app.use((req, res, next) => {
  res.locals.userAgent = req.headers["user-agent"];
  next();
});

app.get("/about", (req, res) => {
  res.render("about", {
    currentUser: "india-arie123",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.use((req, res) => {
  res.status(400);
  res.render("404.html", {
    urlAttempted: req.url,
  });
});

app.listen(3000);
