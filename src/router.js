const handlers = require("./handlers");

const router = (request, response) => {
  const endpoint = request.url;

  if (endpoint === "/") {
    handlers.handleHome(request, response);
  } else if (endpoint.includes("public")) {
    handlers.handlePublic(request, response, endpoint);
  } else if (endpoint.includes("search")) {
    handlers.handleData(request, response, endpoint);
  } else {
    handlers.handle404(request, response);
  }
};

module.exports = router;
