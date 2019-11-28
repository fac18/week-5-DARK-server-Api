## Team DARK! 
(Dan Ayub Rosa Kin)


## Installation 

Clone the repo and run npm install

## Project

Create a web app  which tells people if they should go outside based on the weather and whether the sun has gone down using the openweather API (called from our backend).

## User Stories:

1. As a user, I want to see the reason for given advice on whether I should go outside or not. 

2. As a user, I want to be able to input my location and have the app decide if I should go outside.

## Goals:

- [x] Use at least 1 API

- [x] Make your API calls from the back-end using the Request module (or one you build yourself)

- [x] Your server should contain a minimum of 2 routes

- [x] We expect to see ~~lots~~ some tests! Modularise your code and test all your pure functions. Write tests for as much of your back-end and front-end logic as you can. We don't expect tests on the DOM.

- [x] Test your server routes by injecting fake HTTP requests using Supertest (including testing for 404's). Note - you are not required to test any server route that makes an API call, as this will make the test impure (a test that depends on an external factor is not reliable)

- [x] Host your project on Heroku, see resources

- [x] Use module.exports and require to break a single large server file into smaller modules.

- [x] Consider a good server file structure based on what we have discussed over the week.

- [x]Employ continuous integration on your project with Travis or a similar tool. (If you decide to use Travis, we strongly recommend that you host this project in your own repo rather than in your cohort's FAC repository to avoid all builds getting queued together)

- [] Use CodeCov or a similar tool to report and track test coverage.

- [x] Include Error Handling. For example:

if a user attempts to make a request to a non-existent route to your server (404 - as mentioned above), provide the user with a custom response.
if there is a programmer error on your server (e.g. a handler function does not act as intended), provide the user with a custom response (500 status code).
Include a user input field on your web app and include server-side validation to protect your server from potentially malicious user input.

- [] Display continuous integration and code coverage badges on your project README.

## Stretch goal:
- [x] Research and use Nock to mock the response of external API calls in your tests, and write tests for server routes that make API calls.

- [] Create a route and functionality for a POST request.


## Process

## Struggles

- SPENDING AGES working out you have to set up a .env file to get Heroku and Travis
- Remembering that wherever you have async code you need to use callbacks properly
- leaving the css a lil bit to the last min
