/**
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 * 示例 1:
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 示例 2:
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/add-binary
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function (a, b) {
  if (a.length > b.length) { // 补位
    b = b.padStart(a.length, 0)
  } else {
    a = a.padStart(b.length, 0)
  }
  let isCarry = false
  let binaryResult = ''
  for (let i = a.length - 1; i >= 0; i--){
    let digit = parseInt(a[i]) + parseInt(b[i])
    digit = isCarry ? digit + 1 : digit
    if (digit > 2) {
      binaryResult = '1' + binaryResult
      isCarry = true
    } else if (digit > 1) {
      binaryResult = '0' + binaryResult
      isCarry = true
    } else {
      binaryResult = digit + binaryResult
      isCarry = false
    }
  }
  if (isCarry) {
    binaryResult = '1' + binaryResult
  }
  return binaryResult
};

console.log(addBinary("1010", "1011"))
console.log(addBinary("11", "1"))
console.log(addBinary("1111", "1111"))  // "11110" 
console.log(addBinary("100", "110010")) // "110110"