/**
 * Probando nuestras respuestas HTML
 */

const supertest = require("supertest");
const app = require("../app");

describe("html response", function () {
  let request;
  beforeEach(function () {
    request = supertest(app)
      .get("/")
      .set("User-Agent", "a cool browser")
      .set("Accept", "text/html");
  });

  it("returns an HTML response", function (done) {
    // TODO...
  });

  it("returns your User Agent", function (done) {
    // TODO...
  });
});
