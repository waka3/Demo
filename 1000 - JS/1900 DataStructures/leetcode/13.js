/**
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * IV            4
 * IX            9
 * XL            40
 * XC            90
 * CD            400
 * CM            900
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/roman-to-integer
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const len = s.length
  let num = 0
  for (let i = 0; i < len; i++) {
    let pre = s[i - 1]
    let next = s[i + 1]
    switch (s[i]) {
      case 'M': num += pre && pre === 'C' ? 900 : 1000; break;
      case 'D': num += pre && pre === 'C' ? 400 : 500; break;
      case 'C': num += pre && pre === 'X' ? 90 : next && (next === 'D' || next === 'M') ? 0 : 100; break;
      case 'L': num += pre && pre === 'X' ? 40 : 50; break;
      case 'X': num += pre && pre === 'I' ? 9 : next && (next === 'L' || next === 'C') ? 0 : 10; break;
      case 'V': num += pre && pre === 'I' ? 4 : 5; break;
      case 'I': num += next && (next === 'V' || next === 'X') ? 0 : 1; break;
    }
  }
  return num
};

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('MCMXCIV'))
console.log(romanToInt('MDCCCLXXXIV'))