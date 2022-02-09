/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成
 * 示例 1
 * 输入：nums = [1,1,2]
 * 输出：2, nums = [1,2]
 * 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素
 * 来源：力扣（LeetCode
 * 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-arra
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++){
    const first = nums.indexOf(nums[i])
    const last = nums.lastIndexOf(nums[i])
    if (first === -1) {
      return removeDuplicates(nums)
    }
    if (first !== last) {
      nums.splice(last, 1)
    }
  }
  return nums.length
};

// @lc code=end
console.log(removeDuplicates([1,1,1,1]))