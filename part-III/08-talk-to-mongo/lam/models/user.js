const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  displayName: String,
  bio: String,
});

// Métodos de nuestro esquema
// --------
// método para obtener el nombre del usuario
userSchema.methods.name = function () {
  return this.displayName || this.username;
};

// método para encriptar la password del usuario
const SALT_FACTOR = 10;
// const noop = function () {};

// Función que se ejecuta previo a ser guardado el modelo en mongodb
userSchema.pre("save", function (done) {
  const user = this; // <--- referencia al usuario
  if (!user.isModified("password")) {
    return done();
  }
  // La password a sido modificada, por lo que toca hashearla.
  // Se genera un salto para hashear y una vez completo se ejecuta la fucnión pasada
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) {
      return done(err);
    }
    // Teniendo el salto, procedemos a hashear la password. Una vez completo ejecutamos una función
    // que se encargará de guardar la password hasheada.
    bcrypt.hash(user.password, salt, function (err, hashedPassword) {
      if (err) {
        return done(err);
      }
      user.password = hashedPassword;
      done();
    });
  });
});

// Método para comprobar la password de un usuario
userSchema.methods.checkPassword = function (guess, done) {
  bcrypt.compare(guess, this.password, function (err, isMatch) {
    done(err, isMatch);
  });
};

// Creamos y exportamos el modelo user
const User = mongoose.model("User", userSchema);
module.exports = User;
