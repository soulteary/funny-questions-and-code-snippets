/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var cache = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (!isNaN(cache[diff])) return [cache[diff], i];
        cache[nums[i]] = i;
    }
    return [];
};

module.exports = twoSum;