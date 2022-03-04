/**
 * 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。
 * 例如：
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28 
 * ...
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/excel-sheet-column-number/description/
 */

/**
 * 思路, A-Z：1-26, AA-AZ: 27-52 ... 对应的数字算法是：N * 26^(n-1) + ... + N * 26^0
 * N 每个位置字母对应的数值，n 字母的个数，每多一层数字对应的层级是26的n-1次幂
 * @param {string} columnTitle
 * @return {number}
 * 
 */
 const dict = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26
}

var titleToNumber = function (columnTitle) {
  const len = columnTitle.length - 1
  let index = -1
  sum = 0
  while (index !== len) {
    index++
    sum += dict[columnTitle[index]] * Math.pow(26, len - index)
  }
  return sum
};

console.log(titleToNumber('A'))
console.log(titleToNumber('AB'))
console.log(titleToNumber('ZY'))
console.log(titleToNumber('BBYZ'))
console.log(titleToNumber('BZ'))