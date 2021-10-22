// mustache es un módulo de terceros que cumple la función de ser
// un motor de plantillas.
const Mustache = require("mustache");
let result = Mustache.render("Hi, {{first}} {{last}}!", {
  first: "Nicolas",
  last: "Cage",
});

console.log(result);
