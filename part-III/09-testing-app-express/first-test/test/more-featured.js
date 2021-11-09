/**
 * Se ven las siguientes dos características:
 * 1. testing for errors
 * 2. reversing tests
 */

const chai = require("chai");
const expect = chai.expect;
const capitalize = require("../capitalize");

describes("more features of chai", function () {
  // Chai nos permite verificar si una función lanza un error dada ciertas entradas.
  // note que la llamada a la función se envuelve dentro de otra función para poder ser
  // obtenida.
  it("thows an error if passed a number", function () {
    expect(function () {
      capitalize(123);
    }).to.throw(Error);
  });

  // Podemos negar una equivalencia y revisar que no se cumplan ciertos resultados más
  // especificos.
  it("changes the value", function () {
    expect(capitalize("foo")).not.to.equal("foo");
  });
});
