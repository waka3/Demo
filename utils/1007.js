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

module.exports = {
  getDigitNum
}
