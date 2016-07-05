/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    // keep first element not equl target val
    while (nums[0] === val) nums.shift();

    // scale range from [1, ...]
    var i = 1;
    while (i < nums.length) {
        if (nums[i] === val) {
            while (nums[nums.length - 1] === val) nums.pop();
            var j = nums.length - 1;
            if (j > i) {
                nums[i] = nums[nums.length - 1];
                nums.pop();
            }
        }
        i++;
    }
    return nums;
};

module.exports = removeElement;