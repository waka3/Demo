/**
 * 获取数字每个位置上的数字
 * @param {*} num 
 */
function getDigitNum(num) {
  let nums = []
  while (num > 0) {
    nums.push(num % 10)
    num = parseInt(num / 10)
  }
  return nums
}

/**
 * 判断是否整除
 * @param {*} num 被除数
 * @param {*} divisor 除数
 */
function isInteger(num, divisor) {
  return num / divisor % 1 === 0
}

module.exports = {
  getDigitNum,
  isInteger
}
