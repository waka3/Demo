/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 示例 1：
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 * 示例 2：
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/climbing-stairs
 */

/**
 * 斐波那契数列: 下一阶的结果的前两阶结果相加
 * f(n) = f(n-1) + f(n-2)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  //  数值大的，时间太长
  return climbStairs(n - 1) + climbStairs(n - 2)
};

// 每一阶可能方案的结果集
const chairs = [] 
var climbStairs = function (n) {
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      // 1、2
      chairs.push(i + 1)
    } else {
      chairs[i] = chairs[i - 1] + chairs[i - 2]
    }
  }
  return chairs[n - 1]
};

console.log('2,', climbStairs(2)) // 2
console.log('3,', climbStairs(3)) // 3
console.log('4,', climbStairs(4)) // 5
console.log('5,', climbStairs(5)) // 8
console.log('6,', climbStairs(6)) // 13
console.log('7,', climbStairs(7)) // 21
console.log('8,', climbStairs(8)) // 34
console.log('9,', climbStairs(9)) // 55
console.log('10,', climbStairs(10)) // 89
console.log('45,', climbStairs(45)) // 1836311903