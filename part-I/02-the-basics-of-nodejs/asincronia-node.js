const fs = require("fs");
let options = { encoding: "utf-8" };

fs.readFile("./mytextfile.txt", options, function (error, data) {
  if (error) {
  }
  console.log(data.match(/x/gi).length + " letter X's");
});

console.log("Hello, world");
