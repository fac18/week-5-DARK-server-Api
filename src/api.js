const http = require("http");
const https = require("https");
const getRequest = require("./request");
const config = require("./config");

// grab api key from local config file
let apiKey = config.MY_WEATHER_KEY;

// initialise test city and country (later provided by GET request from frontend)
let location = "London,UK";

const weather = getRequest(
  `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`,
  (err, res) => {
    if (err) throw new Error(`Weather API failed. Error: ${err}`);
    console.log(res.body);
    return res.body;
  }
);
