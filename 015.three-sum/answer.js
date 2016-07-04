/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var result = [];
    var cache = {};
    for (var i = 0, j = nums.length - 2; i < j; i++) {
        for (var m = i + 1, n = nums.length - 1; m < n; m++) {
            for (var k = m + 1; k < nums.length; k++) {
                if (nums[i] + nums[m] + nums[k] == 0) {
                    var arr = [nums[i], nums[m], nums[k]].sort(function (a, b) {
                        return a - b;
                    });
                    if (!cache[arr]) {
                        result.push(arr);
                        cache[arr] = true;
                    }
                }
            }
        }
    }
    return result.length ? result.sort(function (a, b) {
        if (a[0] === b[0]) {
            if (a[1] === b[1]) {
                return a[2] - b[2];
            } else {
                return a[1] - b[1];
            }
        } else {
            return a[0] - b[0];
        }
    }) : [];
};

console.log(
    threeSum.call(null, [1, 2, -2, -1])
);

console.log(
    threeSum.call(null, [-1, 0, 1, 2, -1, -4])
);

console.log(
    threeSum.call(null, [4, -2, -9, 9, 7, 9, 10, -15, 4, -9, -9, 8, -6, 7, -7, -2, 4, -9, -7, -11, 13, 9, 5, -8, 10, 8, -6, -1, -2, -6, 6, -12, 7, 4, 4, -9, -1, -1, -8, 10, 5, -10, -5, 7, 12, 4, 12, -6, 10, -10, -2, 8, 7, 10, 7, 2, -5, 9, -14, 9, -12, -1, 4, 2, 11, -15, 9, -13, -1, -14, 4, 12, -9, -15, -4, 10, 4, -7, -11, -9, -1, -6, 14, -9, -10, -1, 0, -8, -7, -6, 8, -12, 0, -3, 5, -4, -11, -1, -10, 4, -8, 10, -7, -10, 2, 4, -14])
);


module.exports = threeSum;