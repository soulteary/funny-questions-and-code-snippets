/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    if (nums.length == 1) return nums[0];

    var source = nums.sort(function (a, b) {
        return a - b;
    });

    return source[Math.floor(source.length / 2)];
};

module.exports = majorityElement;