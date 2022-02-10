/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 示例 1：
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 * 示例 3：
 * 输入：digits = [0]
 * 输出：[1]
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/plus-one
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function (digits) {
  let i = digits.length - 1
  digits[i] += 1
  while (digits[i] > 9) {
    digits[i] = 0
    i--
    if (i < 0) {
      digits.unshift(1)
    } else {
      digits[i] += 1
    }
  }
  return digits
};
// @lc code=end
console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([0]))
console.log(plusOne([9]))
console.log(plusOne([9,9]))