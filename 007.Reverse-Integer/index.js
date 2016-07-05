const source = require('./question');
let answer = require('./answer');

let result = answer.call(null, source);
console.log(result);