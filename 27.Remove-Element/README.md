## 基本思路

遍历数组, 寻找目标结果与当前元素差数值相等的元素。
利用Array.indexOf(find, from) API实现, 发现效率略低: 380ms

```
var twoSum = function (nums, target) {
    for (var i = 0, j = nums.length; i < j; i++) {
        var diff = target - nums[i];
        var pos = nums.indexOf(diff, i + 1);
        if (pos > -1) {
            return [i, pos];
        }
    }
    return [];
};
```

将indexOf API 改成原生写法, 效率提高一些: 280ms

```
var twoSum = function (nums, target) {
    for (var i = 0, j = nums.length; i < j; i++) {
        var diff = target - nums[i];
        for (var m = i + 1, n = nums.length; m < n; m++) {
            if (diff === nums[m]) return [i, m];
        }
    }
    return [];
};
```

将实现改为字典方式, 效率提高了接近73%。(100ms)

```
var twoSum = function (nums, target) {
    var cache = {};
    for (var i = 0, j = nums.length; i < j; i++) {
        var diff = target - nums[i];
        if (!isNaN(cache[diff])) return [cache[diff], i];
        cache[nums[i]] = i;
    }
};
```

似乎可以再精简一个无用变量, 执行时间最后是96ms左右。

```
var twoSum = function (nums, target) {
    var cache = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (!isNaN(cache[diff])) return [cache[diff], i];
        cache[nums[i]] = i;
    }
    return [];
};
```
