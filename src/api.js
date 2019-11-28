const http = require("http");
const https = require("https");
const getRequest = require("./request");
const config = require("./config");

// grab api key from local config file
let apiKey = config.MY_WEATHER_KEY;

// initialise test city and country (later provided by GET request from frontend, and passed in at level of handler)
let location = "London,UK";

// make function to export which takes location and returns an object describing weather at given location
const grabWeather = location => {
  // initialise weather to return later
  let weather;
  getRequest(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`,
    (err, res) => {
      // the error is either already thrown by getRequest or is produced by streaming error event and just needs printing
      if (err) {
        console.log(err);
      } else {
        weather = res.body; // capture response object in weather variable
        console.log(
          `Weather for ${location} requested. Object returned: ${weather}`
        );
      }
    }
  );
  return weather;
};

// export grabWeather for use in handler
module.exports = grabWeather;
