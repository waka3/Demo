/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 示例 1:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 解释："amanaplanacanalpanama" 是回文串
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/valid-palindrome
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function (s) {
  s = s.replace(/[ `~\!@#\$%\^&\*\(\)\-\+_=\\\;:'"<,.>\?\/|%·\[\]\{\}]/gmi, '')
  s = s.toLocaleLowerCase()
  for (let i = 0; i < s.length; i++){
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
};
// @lc code=end

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))