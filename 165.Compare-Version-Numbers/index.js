const source = require('./question');
let answer = require('./answer');

let result = answer.apply(null, source.input);
console.log(result);