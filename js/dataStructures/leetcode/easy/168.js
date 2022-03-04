/**
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
 * 例如：
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28 
 * ...
 * 示例 1：
 * 输入：columnNumber = 1
 * 输出："A"
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/excel-sheet-column-title
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */

 const dict = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y',
  26: 'Z'
}

var convertToTitle = function (columnNumber) {
  let str = ''
  while (columnNumber > 26) {
    // 末尾处理
    if (columnNumber % 26 === 0) {
      str = 'Z' + str
      columnNumber = parseInt(columnNumber / 26) - 1
    } else {
      str = dict[columnNumber % 26] + str
      columnNumber = parseInt(columnNumber / 26)
    }
  }
  str = dict[columnNumber] + str
  return str
};
// @lc code=end

console.log(convertToTitle(1))     // 'A'
console.log(convertToTitle(28))    // 'AB'
console.log(convertToTitle(701))   // 'ZY'
console.log(convertToTitle(37180)) // 'BBYZ'
console.log(convertToTitle(78))    // 'BZ'