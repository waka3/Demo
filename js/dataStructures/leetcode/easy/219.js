/*
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个不同的索引 i 和 j，
 * 满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 * 示例 1：
 * 输入：nums = [1,2,3,1], k = 3
 * 输出：true
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/contains-duplicate-ii
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function (nums, k) {
  const len = nums.length
  for (let i = 0; i < len; i++){
    for (let j = i + 1; j < len; j++){
      if (nums[i] === nums[j] && Math.abs(i - j) <= k ) {
        return true
      }
    }
  }
  return false
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))