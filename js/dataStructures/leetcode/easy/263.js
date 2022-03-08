/**
 * 
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 0) return false
  const ugly = '235'
  while (ugly.indexOf(n / 2) === -1 || ugly.indexOf(n / 3) === -1 || ugly.indexOf(n / 5) === -1) {
    if (n === 1) return true
    if (n / 2 % 1 === 0) {
      n = n / 2
    } else if (n / 3 % 1 === 0) {
      n = n / 3
    } else if (n / 5 % 1 === 0) {
      n = n / 5
    } else {
      return false
    }
  }
  return true
};

// console.log(isUgly(8))  // true
// console.log(isUgly(6))  // true
// console.log(isUgly(14)) // false