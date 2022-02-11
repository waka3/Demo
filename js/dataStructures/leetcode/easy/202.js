/**
 * 
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 「快乐数」 定义为：
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 如果这个过程 结果为 1，那么这个数就是快乐数。
 * 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
 * 示例 1：
 * 输入：n = 19
 * 输出：true
 * 解释：
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 * 示例 2：
 * 输入：n = 2
 * 输出：false
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/happy-number
 */

/**
 * 循环数逻辑
 * 思路一：计算过程中会出现重复的累加和结果，所以会陷入无限循环，如2,5,15,18
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function (n) {
  let sum = 0;
  let sumSet = new Set()
  while (sum !== 1) {
    const nStr = n.toString()
    for (let i = 0; i < nStr.length; i++){
      sum += nStr[i] * nStr[i]
    }
    if (sumSet.has(sum)) {
      return false
    }
    n = sum
    sumSet.add(n)
    if (sum !== 1) {
      sum = 0
    }
  }
  return sum === 1
};

/**
 * 思路二：
 * 计算结果出现重复的累加结果会陷入循环，数字是0-9，
 * 通过多个无限循环的结果输出可以发现循环的数字闭环为：
 * [4, 16, 37, 58, 89, 145, 42, 20, 4, 16...]
 */
var isHappy = function (n) {
  let sum = 0;
  const loopArray = [16, 37, 58, 89, 145, 42, 20, 4]
  while (sum !== 1) {
    const nStr = n.toString()
    for (let i = 0; i < nStr.length; i++){
      sum += nStr[i] * nStr[i]
    }
    if (loopArray.includes(sum)) {
      return false
    }
    n = sum
    if (sum !== 1) {
      sum = 0
    }
  }
  return sum === 1
};

console.log(isHappy(19))
console.log(isHappy(2)) // 无限循环
console.log(isHappy(15)) // 无限循环
console.log(isHappy(18)) // 无限循环
console.log(isHappy(20))
console.log(isHappy(200))
console.log(isHappy(180))
console.log(isHappy(37))
console.log(isHappy(38))
console.log(isHappy(345))
console.log(isHappy(9999))