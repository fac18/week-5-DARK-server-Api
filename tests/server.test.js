// testing our routing with supertest

const test = require('tape');
const supertest = require('supertest');
const router = require("../src/router");

test('Initialise', (t) => {
    let num = 2
    t.equal(num, 2, 'Should return 2');
    t.end(); // Remember to call t.end() after every test call, to ensure tests run in order. You can also investigate t.plan() in the docs
  })

//   test("check status code is 200", (t) => {
//       supertest(router)
//       .get("/")
//       .expect(200)
//       .expect("content-type", /html/)
//       .end((err, res) => {
//           t.error(error);
//           t.equal(res.text, "Hello", "response should contain \'Hello\'"); 
//           t.end();
//       })
//   })