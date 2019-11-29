# SHOULD I GO OUTSIDE?

## by DARK

**D**an - **A**yub - **R**osa - **K**in

![](https://api.travis-ci.org/fac18/week-5-DARK-server-Api.svg?branch=master)

---

## installation 

Clone the repo and run `npm install`.

---

## objective!

We wanted to create an API call from the backend and thoroughly test our request (nock), our routes (supertest) and pure logic (tape).

---

## our project

We decided to create a web app which tells people if they should go outside based on the weather and whether the sun has gone down, using the openweather API (called from our backend).

---

![](https://i.imgur.com/e0fKs2f.jpg)

---

## our own user stories

- [x] As a user, I want to be able to input my location and have the app decide if I should go outside
  
- [x] As a user, I want to see the reason for given advice on whether I should go outside or not

---

## project requirements

### completed

- [x] Use at least 1 API

- [x] Make your API calls from the back-end using the Request module (or one you build yourself)

- [x] Your server should contain a minimum of 2 routes

- [x] Host your project on Heroku, see resources

---

- [x] We expect to see ~~lots~~ some tests! Modularise your code and test all your pure functions. Write tests for as much of your back-end and front-end logic as you can. We don't expect tests on the DOM.

- [x] Test your server routes by injecting fake HTTP requests using Supertest (including testing for 404's). Note - you are not required to test any server route that makes an API call, as this will make the test impure (a test that depends on an external factor is not reliable)

---

- [x] Use module.exports and require to break a single large server file into smaller modules.

- [x] Consider a good server file structure based on what we have discussed over the week.

- [x] Employ continuous integration on your project with Travis or a similar tool. (If you decide to use Travis, we strongly recommend that you host this project in your own repo rather than in your cohort's FAC repository to avoid all builds getting queued together)

---

- [x] Include Error Handling. For example:

- [x] if a user attempts to make a request to a non-existent route to your server (404 - as mentioned above), provide the user with a custom response.

- [x] if there is a programmer error on your server (e.g. a handler function does not act as intended), provide the user with a custom response (500 status code).

- [x] Include a user input field on your web app and include server-side validation to protect your server from potentially malicious user input.

---

## failed

- [ ] Display continuous integration and code coverage badges on your project README.

- [ ] Use CodeCov or a similar tool to report and track test coverage.

---

## stretch goals

### completed 

- [x] Research and use Nock to mock the response of external API calls in your tests, and write tests for server routes that make API calls.


---

### failed

- [] Create a route and functionality for a POST request.

---

### Accessibility

![](https://i.imgur.com/TGeUYsF.png)

---

## The time is ```1575031816```

- Data returned from API is in Unix time format

![](https://i.imgur.com/Ll6HCxx.png)

- This is the number of seconds elapsed since 01/01/1970 UTC (same time as GMT)

![](https://i.imgur.com/OqmBzZZ.png)

- ```Math.floor(new Date().getTime() / 1000)``` gets us the current time in Unix

---

## LOGIC BEHIND THE MADNESS

![](https://i.imgur.com/zRpsxlK.png)

![](https://i.imgur.com/ZWndqio.png)

![](https://i.imgur.com/32NZUqS.png)

![](https://i.imgur.com/wmPSzHq.png)

- we wanted to compare the weather code but we to had to turn it into a string.

---

## dotenv

We originally had a local, gitignored config.json file to protect our API key, but this proved incompatible with Travis & Heroku.

As a solution, we used the massively popular npm package, **dotenv**.

![](https://i.imgur.com/nb0PmiI.png)

The trick here is that by running the following code at the top of your programme, any variable listed in a .env file becomes readily accessible via the node session's global [process](https://nodejs.org/api/process.html) object!

```javascript
const result = require("dotenv").config();
```

This line both requires in the dotenv package and immediately invokes its **config** method. It could perhaps more clearly be written like:

```javascript
const dotenv = require('dotenv');
const result = dotenv.config();
```

The assignment to **result** in the previous slide is unimportant. Often it need never be referenced again, but this does allow you to catch any errors thrown up during the dotenv injection process, by writing the following:

```javascript
if (result.error) {
  throw result.error
}
```

Your accompanying **.env** file should be placed in the root and should look something like this:

```
AN_API_KEY=jnefiuef73rjnrgv9w3ir3haeuie
ANOTHER_API_KEY=01ckshbsklrguih489feioefhuief
```

Note that there is no whitespace, just new lines to indicate new variables.

**IMPORTANT** Remember to add this `.env` to your .gitignore file before committing!

With all this in place, we can then access the variables on the fly by writing something like:

```javascript
let apiKey = process.env.AN_API_KEY;
```

And finally, we can add these variables, via handy GUIs in the Travis and Heroku dashboards, to our CI and deployment environments, without exposing them to the open internet.

---

## testing

![](https://i.imgur.com/KP21cA3.png)


---

## nock

![](https://i.imgur.com/mZjWupN.png)

![](https://i.imgur.com/OPRlckj.png)

---

## things we learned 

1) Writing a custom request function and building our own response object 
2) Making an API call from the backend
3) Testing server and api calls with mock responses by SuperTest and Nock
4) Using npm package dotenv to inject process.env variables
5) Doing automatic CI with Travis & deployment with Heroku
6) Including a dedicated 404 page

---

## Struggles

- SPENDING AGES working out you have to set up a .env file to get Heroku and Travis
- Remembering that wherever you have async code you need to use callbacks properly
- Worrying about converting times to account for different time zones to calculate whether the  sun had risen or set
- Leaving the css a lil bit to the last minute
