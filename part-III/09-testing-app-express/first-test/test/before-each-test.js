/**
 * Este código no es más que código ficticio. El principal objetivo
 * es mostrar una de las muchas características que nos da el framework mocha.
 *
 * ---------------------------------------------------------------------------
 *
 * mocha tiene una función llamada 'beforeEach' que nos permite configurar todas
 * las variables y servicios requeridos por las pruebas que llevaremos a cabo. Esto
 * nos da la ventaja de no repetir código una y otra vez cada vez que testeamos algo.
 */

const chai = require("chai");
const expect = chai.expect;

describe("User", function () {
  let user;
  beforeEach(function () {
    user = new User({
      firstName: "Donald",
      lastName: "Trump",
      birthday: new Date(1975, 3, 20),
    });
  });

  it("can extract its name", function () {
    expect(user.getName()).to.equal("Donald Trump");
  });

  it("can get its age in milliseconds", function () {
    expect(user.getAge()).to.equal(now - user.birthday);
  });
});
