const path = require("path");
const fs = require("fs");
const grabWeather = require("./api");
const goOutDecision = require("./logic");
// const env = require("dotenv").config();

const handleHome = (request, response) => {
  const filePath = path.join(__dirname, "../public/index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      response.writeHead(500, { "content-type": "text/html" });
      response.end("A problem has occurred on our end - sorry folks!");
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      response.end(file);
    }
  });
};

const handlePublic = (request, response, endpoint) => {
  const extension = endpoint.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/js",
    ico: "image/x-icon",
    svg: "image/svg+xml",
    jpeg: "image/jpeg"
  };
  const filePath = path.join(__dirname, "..", endpoint);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      fs.readFile(
        path.join(__dirname, "..", "/public/not-found.html"),
        (err2, file2) => {
          if (err2) {
            console.log(err2);
          } else {
            response.writeHead(404, { "content-type": "text/html" });
            response.end(file2);
          }
        }
      );
    } else {
      response.writeHead(200, { "content-type": extensionType[extension] });
      response.end(file);
    }
  });
};

const handleData = (request, response, endpoint) => {
  const location = endpoint.split("=")[1];
  grabWeather(location, (err, weather) => {
    if (err) {
      console.log(err);
      response.writeHead(500, { "content-type": "text/html" });
      response.end("A problem has occurred on our end - sorry folks!");
    } else {
      // process weather object with some js logic to produce final results
      let result = goOutDecision(weather);
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify(result));
    }
  });
};

const handle404 = (request, response) => {
  let filePath = path.join(__dirname, "../public/not-found.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      response.writeHead(500, { "content-type": "text/html" });
      response.end("A problem has occurred on our end - sorry folks!");
    } else {
      response.writeHead(404, { "content-type": "text/html" });
      response.end(file);
    }
  });
};

module.exports = { handleHome, handlePublic, handleData, handle404 };
