const passport = require("passport");
const User = require("./models/user");

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
};
