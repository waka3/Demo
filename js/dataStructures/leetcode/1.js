/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/two-sum
 */

/**
 * 方法一：
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target, start = 0) {
  let hasFind = false
  if (start > nums.length - 2) return ''
  for (let i = start; i < nums.length - 1; i++) {
    if (nums[start] + nums[i + 1] === target) {
      hasFind = true
      return [start, i + 1]
    }
  }
  if (!hasFind) {
    return twoSum(nums, target, start + 1)
  }
}

// 方法二：
var twoSum = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return ''
}

console.log(twoSum([2, 7, 11, 15], 9))