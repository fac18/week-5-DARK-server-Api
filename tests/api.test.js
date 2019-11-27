// testing of the api with nock (stretch goal)

const nock = require('nock');
const tape = require('tape');
const config = require("../src/config");
const getRequest = require("../src/request");

let apiKey = config.MY_WEATHER_KEY;
let location = "London,UK";

let response = {
  yes: "yes"
}

tape('server test file is working', t => {
  t.equals(1,1,'1 should be 1');
  t.end();
})

tape('nock intercepts weather API request successfully', t => {
  const scope = nock('http://api.openweathermap.org/data/2.5/')
    .get(`/weather?q=${location}&APPID=${apiKey}`)
    .reply(200, {
      timezone: 0
    });
  const weather = getRequest(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`,
    (err, res) => {
      if (err) throw new Error(`Weather API failed. Error: ${err}`);
      console.log(res.body);
      console.log(res.body.timezone);
      // return res.body;
    });
    console.log(weather)
    // t.equals(scope.timezone,weather.timezone)
  t.end();

});