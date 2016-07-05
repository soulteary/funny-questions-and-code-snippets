/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    function getQueue (source) {
        var result = [];
        var target = source;
        while (target && target.val !== null) {
            result.push(target.val);
            target = target.next;
        }
        return result;
    }

    var result = [];
    var list1 = getQueue(l1);
    var list2 = getQueue(l2);

    // keep small queue at first
    if (list1.length > list2.length) {
        var swap = list2;
        list2 = list1;
        list1 = swap;
    }

    for (var i = 0, j = list1.length; i < j; i++) {
        result.push(list1[i] + list2[i]);
    }

    result = result.concat(list2.splice(list1.length));

    for (var i = 0, j = result.length; i < j; i++) {
        if (result[i] >= 10) {
            var origin = result[i];
            result[i] = result[i] % 10;
            var multiple = (origin - result[i]) / 10;
            result[i + 1] = result[i + 1] ? result[i + 1] + multiple : multiple;
        }
    }

    return result;
};

module.exports = addTwoNumbers;