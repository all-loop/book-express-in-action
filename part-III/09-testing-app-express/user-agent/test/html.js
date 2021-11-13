/**
 * Probando nuestras respuestas HTML
 */

const supertest = require("supertest");
// cheerio en breve es una libreria que nos permite incorporar las caracteristicas
// de JQuery dentro de node. Es decir, trabajar con datos con formato HTML
const cheerio = require("cheerio");
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
        // Parseamos la respuesta con formato HTML con cheerio
        let $ = cheerio.load(htmlResponse); // iniciamos el objeto cheerio
        let userAgent = $(".user-agent").html().trim(); // obteniendo el user-agent
        if (userAgent !== "a cool browser") {
          throw new Error("User Agent not found");
        }
      })
      .end(done);
  });
});
