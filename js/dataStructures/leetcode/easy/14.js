/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/longest-common-prefix
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonStr = ''
  if (strs.length === 1) {
    commonStr = strs[0]
  } else if (strs.length < 1) {
    commonStr = ''
  } else {
    const maxLen = Math.max(...strs.map(item => item.length))
    for (let i = 0; i < maxLen; i++) {
      for (let j = 0; j < strs.length - 1; j++) {
        // 从头判断，不相等就返回 相等 拼接
        if (strs[j][i] !== strs[j + 1][i]) return commonStr
        if (j === strs.length - 2) commonStr += strs[j][i]
      }
    }
  }
  return commonStr
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix(["a"]))
