/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足
 * 左括号必须用相同类型的右括号闭合
 * 左括号必须以正确的顺序闭合
 * 示例 1
 * 输入：s = "()
 * 输出：true
 * 来源：力扣（LeetCode
 * 链接：https://leetcode-cn.com/problems/valid-parenthese
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  while (s.indexOf('()') > -1 || s.indexOf('[]') > -1 || s.indexOf('{}') > -1) {
    if(s.indexOf('()') > -1) s = s.replace(/\(\)/gi, '')
    if(s.indexOf('[]') > -1) s = s.replace(/\[\]/gi, '')
    if(s.indexOf('{}') > -1) s = s.replace(/\{\}/gi, '')
  }
  return s.length < 1
};

var isValid = function (s) {
  while (s.indexOf('()') > -1 || s.indexOf('[]') > -1 || s.indexOf('{}') > -1) {
    s = s.replace(/(\(\))|(\[\])|(\{\})/gi, '')
  }
  return s.length < 1
};

console.log(isValid("([]{}"))
console.log(isValid("{[]}{([])}"))