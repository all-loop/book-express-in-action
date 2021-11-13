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
    request.expect("Content-Type", /html/).expect(200).end(done);
  });

  it("returns your User Agent", function (done) {
    request
      .expect(function (res) {
        let htmlResponse = res.text;
        // TODO...
      })
      .end(done);
  });
});
