const fs = require("fs");

fs.readFile("myText.txt", function (err, data) {
  if (err) {
    console.error(err);
    // Acá si sucede un error es importante detener la
    // ejecución y evitar valores erráticos.
    throw err;
  }
  console.log(data);
});
