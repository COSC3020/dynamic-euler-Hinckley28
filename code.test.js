const fs = require('fs');
const assert = require('assert');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);

function factorialTest(n) {
  if(n === 0) return 1;
  else return n * factorialTest(n - 1);
}

function eTest(n) {
  if(n === 0) return 1;
  else return 1.0 / factorialTest(n) + e(n - 1);
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(e(n)) ==
            JSON.stringify(eTest(n));
    });
jsc.assert(test);
console.log('tests passed');