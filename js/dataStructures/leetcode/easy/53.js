/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 * 示例 1：
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 示例 2：
 * 输入：nums = [1]
 * 输出：1
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/maximum-subarray
 */

/**
 * 方法一
 * 思路：遍历结果集，计算全部连续组合的结果，取每次计算的最大值
 * 如：1个值的全部子数组，连续2个值、3个值的全部子集，
 * 每次取计算出的子集大小与上一次的最大值比较取大
 * 缺点：时间复杂度大O(n^3)，数组长度过大时间超出限制
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
  let len = 1
  const numsLen = nums.length
  let max = Math.max(...nums)
  while (len !== numsLen) {
    for (let i = 0; i < numsLen; i++) {
      let sum = nums[i]
      for (let j = i + 1; j <= len + i && j < numsLen; j++) {
        sum += nums[j]
      }
      max = Math.max(max, sum)
    }
    len++;
  }
  return max
};

/**
 * 方法二：
 * 方法一优化：时间复杂度大O(n^2)，同样数组长度过大时间超出限制
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
  const numsLen = nums.length
  let max = -Infinity
  for (let i = 0; i < numsLen; i++) {
    let sum = nums[i]
    max = Math.max(max, sum)
    for (let j = i + 1; j < numsLen; j++) {
      sum += nums[j]
      max = Math.max(max, sum)
    }
  }
  return max
};

/**
 * 方法三：网上查阅贪心法
 * 结果集正确，但是无法解释原理，无法校验完整性 -> 无法确定百分百正确
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    // 如果部分和小于零，直接舍弃，从零开始重新累加
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i]; // 加上当前元素
    max = Math.max(max, sum);
  }
  return max;
};

console.log(maxSubArray([1]))
console.log(maxSubArray([5, 4, -1, 7, 8]))
console.log(maxSubArray([-2, 1, -3, 4, -1]))
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))