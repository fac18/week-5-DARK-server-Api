// testing any pure functions with tape

const tape = require('tape');
const goOutDecision = require('../src/logic');

let dummyWeather = {
   weather:[
       {id : 301}
    ] , 
    sys : {
    sunrise: 1574926750,
    sunset:1574956676
    }
   
};

tape('logic test is working', t=> {
t.equals(1 ,1 , 'should be 1');
t.end();
});

tape('test goOutDecision function' , t=>{
    let actual = goOutDecision(dummyWeather).hasOwnProperty('yesno');
    console.log(actual);
    let expected = true
     t.deepEqual(actual , expected , 'decision object contains key yesno');
    t.end();
})

tape('test goOutDecision function' , t=>{
    let actual = goOutDecision(dummyWeather).hasOwnProperty('reason');
    console.log(actual);
    let expected = true
     t.deepEqual(actual , expected , 'decision object contains key reason');
    t.end();
})

goOutDecision(dummyWeather)

tape('test goOutDecision function' , t=>{
    let actual = dummyWeather
    let expected = {
        weather:[
            {id : 301}
         ] , 
         sys : {
         sunrise: 1574926750,
         sunset:1574956676
         }
        
     };
     t.deepEqual(actual , expected , 'original object should not be mutated');
    t.end();
})



