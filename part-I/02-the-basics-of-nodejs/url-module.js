// url es un módulo pre-construido por node. Nos permite
// parsear una url.
const url = require("url");
const parsedURL = url.parse("http://example.com/profile?name=barry");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
