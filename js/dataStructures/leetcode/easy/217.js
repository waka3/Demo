/**
 * 
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 * 示例 1：
 * 输入：nums = [1,2,3,1]
 * 输出：true
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/contains-duplicate
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const len = nums.length
  for (let i = 0; i < len; i++){
    for (let j = i + 1; j < len; j++){
      if (nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false
};