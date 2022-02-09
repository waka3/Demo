/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * 示例 1:
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/search-insert-position
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
  let index = nums.indexOf(target)
  if (index < 0) {
    for (let i = 0, len = nums.length; i < len; i++){
      if (nums[i] > target) {
        nums.splice(i, 0, target)
        break;
      }
      if (len === nums.length) nums.push(target)
    }
    index = nums.indexOf(target)
  }
  return index
};
// @lc code=end

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 0))
console.log(searchInsert([1], 0))