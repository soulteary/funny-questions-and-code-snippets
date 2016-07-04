// without dom
const int = 1;
const arr = [1, 2, 3, [4]];
const bool = false;
const obj = {prop: 1};
const nil = null;
const undef = undefined;
const fn = function () {
    return 123;
};
const date = new Date();
const regexp = /^\w+/i;


// feature
// const blob = new Blob([JSON.stringify({hello: "world"}, null, 2)], {type: 'application/json'});
// const sym = Symbol("test");
// buffer/map/set

module.exports = [
    int, arr, bool, obj, nil, undef, fn, date, regexp
];