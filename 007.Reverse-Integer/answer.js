/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // extend single digit
    if (x > -10 && x < 10) return x;

    function isOverflow (src) {
        return src >= 2147483647 || src < -2147483648;
    }

    // overflow -2147483648,2147483647
    if (isOverflow(x)) return 0;

    var source = x.toString().split('');

    var sign = 1;
    if (x < 0) {
        sign = -1;
        source.shift();
    }

    var ret = Number(source.reverse().join('').replace(/^0{1,}/g, '')) * sign;
    return isOverflow(ret) ? 0 : ret;
};

module.exports = reverse;