/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: s = "abcabcbb
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3
 * 来源：力扣（LeetCode
 * 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-character
 * 思路参考：https://www.jianshu.com/p/b1ba6bb3aca2
 */
 
/**
 * 思路：
 * 1. 存储字符数组
 * 2. 数组内不存在的字符往里存放
 * 3. 数组内存在, 移除数组从0开始到当前位置的所有字符(开始出现重复,表示当前位置往前一定会存在重复，可移除), 从下一个字符串开始继续查找
 * 4. 每次取当前数组和最大长度的最大长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let maxLenArray = [] // 不重复字符的数组
  let count = 0 // 个数
  for (let i = 0; i < len; i++) {
    const temp = maxLenArray.indexOf(s[i]) // 数组内是否存在当前字符
    if (temp !== -1) {
      maxLenArray.splice(0, temp + 1) // 存在, 移除重复数据
    }
    maxLenArray.push(s[i]) // 插入当前数据
    count = Math.max(count, maxLenArray.length) // 赋值，取最大长度
  }
  return count
};

console.log(lengthOfLongestSubstring("abcabcbb"))
// [a] -> [a,b] ->[a,b,c] ->[b,c,a] ->[c,a,b] -> [a,b,c] -> [b] -> [b]
console.log(lengthOfLongestSubstring("dvdf"))
// [d] -> [d,v] ->[v,d] ->[v,d,f]
console.log(lengthOfLongestSubstring("pwwkew"))
// [p] -> [p,w] ->[w] -> [w,k] ->[w,k,e] -> [k,e,w]