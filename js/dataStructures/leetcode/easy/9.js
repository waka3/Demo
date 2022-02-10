/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/palindrome-number
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const s = x.toString()
  const len = s.length
  const mid = Math.floor(len / 2)
  for (let i = 0; i < mid; i++){
    if(s[i] !== s[len - 1 - i]) return false
  }
  return true
};

console.log(isPalindrome(1001))