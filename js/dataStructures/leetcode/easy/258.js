/**
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。
 * 示例 1:
 * 输入: num = 38
 * 输出: 2 
 * 解释: 各位相加的过程为：
 * 38 --> 3 + 8 --> 11
 * 11 --> 1 + 1 --> 2
 * 由于 2 是一位数，所以返回 2。
 * 示例 1:
 * 输入: num = 0
 * 输出: 0
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/add-digits
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num > 9) {
    let sum = 0
    let n = num
    // 位数
    while (n > 0) {
      sum += n % 10
      n = parseInt(n / 10)
    }
    num = sum
  }
  return num
};

console.log(addDigits(38)) // 2
console.log(addDigits(0))  // 0
console.log(addDigits(25)) // 7