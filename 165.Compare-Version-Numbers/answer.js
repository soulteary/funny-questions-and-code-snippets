/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {

    var arr1 = version1.split('.').map(function (v) {
        return Number(v);
    });
    var arr2 = version2.split('.').map(function (v) {
        return Number(v);
    });

    function compare (arr1, arr2, level) {
        if (arr1[level] !== undefined) {
            if (arr2[level] !== undefined) {
                if (arr1[level] > arr2[level]) return 1;
                if (arr1[level] < arr2[level]) return -1;
                // compare next level
                return compare(arr1, arr2, level + 1);
            } else {
                // 1.0 vs 1
                if (arr1[level] === 0) return compare(arr1, arr2, level + 1);
                // 1.1 vs 1
                return 1;
            }
        } else {
            // last turn equl.
            return 0;
        }
    }

    if (arr1.length >= arr2.length) {
        return compare(arr1, arr2, 0);
    } else {
        return -1 * compare(arr2, arr1, 0)
    }
};

module.exports = compareVersion;