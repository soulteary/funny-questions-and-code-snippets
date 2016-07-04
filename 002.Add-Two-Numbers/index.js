const source = require('./question');
let answer = require('./answer');

let result = answer.apply(null, source);
console.log(result);