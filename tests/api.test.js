// testing of the api with nock (stretch goal)

const nock = require("nock");
const tape = require("tape");
const config = require("../src/config");
const getRequest = require("../src/request");
const grabWeather = require("../src/api");

let apiKey = config.MY_WEATHER_KEY;

tape("api test file is working", t => {
  t.equals(1, 1, "1 should be 1");
  t.end();
});

// test getRequest function with weather API
tape("api request for London,UK works as expected", t => {
  let location = "London,UK";
  // first we make a mock API response using nock
  nock("http://api.openweathermap.org/data/2.5/")
    .get(`/weather?q=${location}&APPID=${apiKey}`)
    .reply(200, {
      timezone: 0,
      name: "London"
    });
  // this will intercept the request below and respond with the status code and object specified
  getRequest(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        t.equal(res.statusCode, 200, "status code should be 200");
        t.equal(
          res.headers["content-type"],
          "application/json",
          "content-type should be json"
        );
        t.equal(res.body.timezone, 0, "timezone should be 0");
        t.equal(res.body.name, "London", 'name key should be "London"');
      }
    }
  );
  t.end();
});

// can we test grabWeather in here too i.e. an actual API call (NB. it is necessarily impure)
