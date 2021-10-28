const express = require("express");
const path = require("path");
const zipdb = require("zippity-do-dah");
const axios = require("axios");
require("dotenv").config();

const app = express();

// Configuraciones de la API Openweather
const paramsOpenWeather = {
  appid: process.env.OPENWEATHER_KEY,
  lang: process.env.LANGUAGE,
  units: "metric",
};

// Middleware para definir el directorio público
app.use(express.static(path.resolve(__dirname, "public")));

// Configuración del motor de vista
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get(/^\/(\d{5})$/, async (req, res, next) => {
  let zipCode = req.params[0];
  let location = zipdb.zipcode(zipCode);
  if (!location.zipcode) {
    next();
    return;
  }

  let latitude = location.latitude;
  let longitude = location.longitude;
  let temperature = await getClima(latitude, longitude);

  if (!temperature) {
    next();
    return;
  }

  res.json({
    zipcode: zipCode,
    temperature: temperature,
  });
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000);

// Helpers o funciones de ayuda
async function getClima(lat, lon) {
  try {
    const instance = axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5/weather",
      params: { ...paramsOpenWeather, lat, lon },
    });
    const resp = await instance.get();
    return resp.data.main.temp;
  } catch (err) {
    console.log(err);
    return null;
  }
}
