const getRequest = require("./request");
// add keys to process.env
const result = require("dotenv").config();

// make function to export which takes location and returns an object describing weather at given location
const grabWeather = (location, cb) => {
  let apiKey = process.env.MY_WEATHER_KEY;
  console.log("my weather key inside grabWeather:", apiKey);

  getRequest(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`,
    (err, res) => {
      if (err) {
        // the error is already produced by getRequest and just needs printing by the callback at handler level
        cb(err);
      } else {
        // if no error, we can send the body of the response (i.e. the weather) to the handler instead
        cb(null, res.body);
      }
    }
  );
};

// export grabWeather for use in handler
module.exports = grabWeather;
