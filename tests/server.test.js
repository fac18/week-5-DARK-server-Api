// testing our routing with supertest

const test = require('tape');
const supertest = require('supertest');
const router = require("../src/router");

  test("Home route returns a status code of 200", (t) => {
      supertest(router)
      .get("/")
      .expect(200)
      .expect("content-type", /html/)
      .end((err, res) => {
          t.error(err);
          t.equal(res.statusCode, 200, "response should contain 200 status code"); 
          t.end();
      })
  })

  test("Home route returns a status code of 404", (t) => {
    supertest(router)
    .get("/fhwefbewskjbf")
    .expect(404)
    .expect("content-type", /html/)
    .end((err, res) => {
        t.error(err);
        t.equal(res.statusCode, 404, "response should contain 404 status code"); 
        t.end();
    })
})

// test("Home route returns a status code of 404", (t) => {
//     supertest(router)
//     .get("/fhwefbewskjbf")
//     .expect(404)
//     .expect("content-type", /html/)
//     .end((err, res) => {
//         t.error(err);
//         t.equal(res.statusCode, 404, "response should contain 404 status code"); 
//         t.end();
//     })
// })