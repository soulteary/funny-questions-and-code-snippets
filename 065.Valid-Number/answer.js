/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    // empty str
    if (!s.length) return false;

    function moreThanOne (src, sign) {
        return src.indexOf(sign) !== src.lastIndexOf(sign);
    }

    // trim
    var source = s.replace(/^\s+|\s+$/g, '');

    // abs
    source = source.replace(/^\-|^\+/, '');
    // remove e sign
    source = source.replace(/e(\+|\-)/, 'e');

    // more than one - / .
    if (moreThanOne(source, '+') || moreThanOne(source, '-') || moreThanOne(source, '.')) return false;

    // not support +- -+
    if (source.indexOf('+') > -1 && source.indexOf('-') > -1) return false;

    // simple number
    if (source.match(/^\d+$/)) return true;

    // digit
    if (source.match(/^\d+\.\d*$/) || source.match(/^\d*\.\d+$/)) return true;

    // 10e9 .2e9 1.3e9 123e+3
    if (source.match(/^\.\d+e\d+$/i) || source.match(/^\d+\.\d+e\d+$/i) || source.match(/^\d+\.?e\d+$/i)) return true;

    return false;
};

module.exports = isNumber;