/**
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 * 示例 1：
 * 输入：x = 4
 * 输出：2
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/sqrtx
 */

/**
 * 思路：二分法
 * 1. 取中位数大小
 * 2. 判断中位数的平方与x的大小获取下一次取中位数的区间
 * 3. 循环取中位数，当中位数的平方无限接近与x时向下取整
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function (x) {
  let middle = x / 2
  let prev = 0
  let next = x
  if (x === 1) return 1
  while ((middle * middle) - x > 0.00001 || x - middle * middle > 0.00001) {
    if (middle * middle >= x) {
      next = middle
    } else {
      prev = middle
    }
    middle = (prev + next) / 2
  }
  return Math.floor(middle)
};

console.log('1,', mySqrt(1)) // 1
console.log('2,', mySqrt(2)) // 1
console.log('5,', mySqrt(5)) // 2
console.log('7,', mySqrt(7)) // 2
console.log('8,', mySqrt(8)) // 2
console.log('4,', mySqrt(4)) // 2
console.log('9,', mySqrt(9)) // 3
console.log('15,', mySqrt(15)) // 3
console.log('2147395599,', mySqrt(2147395599)) // 4