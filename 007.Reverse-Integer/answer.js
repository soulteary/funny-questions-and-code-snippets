/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x === 0) {
        return 0;
    }

    var source = x.toString();

    if (source.length >= 10) {
        return 0;
    }

    source = source.split('');

    var sign = 1;
    if (x < 0) {
        sign = -1;
        source.shift();
    }
    return Number(source.reverse().join('').replace(/^0{1,}/g, '')) * sign;
};

module.exports = reverse;