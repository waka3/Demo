/**
 * 
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 * 示例 1：
 * 输入：s = "Hello World"
 * 输出：5
 * 示例 2：
 * 输入：s = "   fly me   to   the moon  "
 * 输出：4
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/length-of-last-word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.split(' ')
  let lastWordIndex = arr.length - 1
  while (arr[lastWordIndex].length === 0) {
    lastWordIndex--
  }
  return arr[lastWordIndex].length
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))