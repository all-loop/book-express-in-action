const http = require("http");

function requestHandler(request, response) {
  console.log("In come a request to: " + request.url);
  response.end("Hello, world!");
}

let server = http.createServer(requestHandler);

server.listen(3000);
