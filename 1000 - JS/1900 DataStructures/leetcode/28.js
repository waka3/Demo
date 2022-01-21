/**
 * 实现 strStr() 函数。
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 
 * 示例 1：
 * 输入：haystack = "hello", needle = "ll
 * 输出：2
 * 来源：力扣（LeetCode
 * 链接：https://leetcode-cn.com/problems/implement-strst
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0
  const res = haystack.match(new RegExp(needle))
  return res ? res.index : -1
};

console.log(strStr('hello', 'll'))