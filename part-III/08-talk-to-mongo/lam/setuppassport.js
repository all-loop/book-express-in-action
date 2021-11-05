const passport = require("passport");
const User = require("./models/user");

// Definimos una estrategia local para la autenticación
const LocalStrategy = require("passport-local").Strategy;

module.exports = function () {
  // La serialización debe convertir un objeto de usuario en un Id.
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  // La deserialización debe convertir un Id dentro de un objeto de usuario.
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // Describimos en código la estragia local de autenticación
  // 1. Buscamos el usuario dado por el usuario
  // 2. Si no existe tal usuario, quiere decir que no puede ser autenticado, por lo que
  // terminamos el proceso de autenticación con un mensaje de vuelta.
  // 3. Si existe, comparamos la password dada con la del usuario registrado. Si estas
  // coinciden, devolvemos el actual usuario. Caso contraio, terminamos el proceso con un
  // mensaje de vuelta.
  passport.use(
    "login",
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: "Username or Password invalid.",
          });
        }
        user.checkPassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: "Username or Password invalid.",
            });
          }
        });
      });
    })
  );
};
