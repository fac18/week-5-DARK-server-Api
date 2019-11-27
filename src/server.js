const http = require("http");
const https = require("https");
const router = require("./router");
const port = process.env.PORT || 9000;
const hostname = process.env.HOSTNAME || "localhost";

const server = http.createServer(router);
server.listen(port, () => {
  console.log(`server up and running on ${localhost}:${port}`);
});
