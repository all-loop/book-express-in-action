const chai = require("chai");
// expect nos permitirá realizar las afirmaciones en nuestras pruebas
const expect = chai.expect;

const capitalize = require("../capitalize");

// Describimos nuestra prueba al nivel de mocha
describe("capitalize", function () {
  // Especificamos el código a probar por mocha
  it("capitalize single words", function () {
    // Realizamos los test a través de las afirmaciones
    expect(capitalize("express")).to.equal("Express");
    expect(capitalize("cats")).to.equal("Cats");
  });

  it("makes the rest of the string lowercase", function () {
    expect(capitalize("javaScript")).to.equal("Javascript");
  });

  it("leaves empty strings alone", function () {
    expect(capitalize("")).to.equal("");
  });
});
