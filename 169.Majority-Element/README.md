## 基本思路

题目要找出大于数组中一半数字的元素, 果断先排序, 并确定小头方向。

然后将数组总数折半, 小数直接消去即可(利用数组index从0开始,直接获得一半+1的元素)。