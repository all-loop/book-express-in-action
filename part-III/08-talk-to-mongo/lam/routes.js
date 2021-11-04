const express = require("express");
const passport = require("passport");
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

// Enrutamiento para el homepage
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

// Enrutamiento para el registro de usuarios
router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post(
  "/signup",
  (req, res, next) => {
    // body-parser añade username y password al body de la solicitud
    const { username, password } = req.body;
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return next(err);
      }
      if (user) {
        req.flash("error", "User already exists");
        return res.redirect("/signup");
      }
      const newUser = new User({
        username,
        password,
      });
      newUser.save(next);
    });
  },
  // Acá sucede la autenticación del usuario
  passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true,
  })
);

// Enrutamiento para el perfil del usuario
router.get("/users/:username", (req, res, next) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(404);
    }
    res.render("profile", { user });
  });
});

module.exports = router;
