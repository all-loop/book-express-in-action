const express = require("express");
const { models } = require("mongoose");

// Importamos el modelo User
const User = require("./models/user");

// Creamos el router
const router = express.Router();

// Middleware
router.use((req, res, next) => {
  // Se configura las variables a usar en nuestra plantilla
  res.locals.currentUser = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});

// Enrutamiento
router.get("/", (req, res, next) => {
  // Consultamos los usuarios de la BD, devolviendo siempre
  // por los nuevos usuarios primero.
  User.find()
    .sort({ createdAt: "descending" })
    .exec((err, users) => {
      if (err) {
        return next(err);
      }
      res.render("index", { users: users });
    });
});

module.exports = router;
