"use strict";

const http = require("http");
const https = require("https");

const getRequest = (url, cb) => {
  // assign appropriate protocol depending on beginning of passed url
  let protocol = /^https/.test(url) ? https : http;
  
  // use get method with whichever protocol is assigned
  protocol.get(url, res => {
    // initialise variables to pass to callback
    let err;
    let resObj = {};

    // non-stream related error handling
    const { statusCode } = res;
    const contentType = res.headers["content-type"];
    if (statusCode !== 200) {
      err = new Error(`Your request has failed. Status code: ${statusCode}`);
      cb(err);
    } else if (!/json/.test(contentType)) {
      err = new Error(
        `Unexpected content type: expecting JSON but received ${contentType}`
      );
      cb(err);
    }

    // stream the body of the response
    res.setEncoding("utf8");
    let rawData = "";
    res.on("data", chunk => {
      rawData += chunk;
    });

    // handle errors occuring during streaming
    res.on("error", e => {
      err = e;
      cb(err);
    });

    // on successful stream, pass constructed response object to callback
    res.on("end", () => {
      // build response object to pass to callback, including body, status and content-type
      resObj.body = JSON.parse(rawData);
      resObj.statusCode = statusCode;
      resObj.headers = {};
      resObj.headers['content-type'] = contentType;
      cb(null, resObj);
    });
  });
};

module.exports = getRequest;
