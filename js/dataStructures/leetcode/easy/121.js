/*
 *
 */

/**
 * 方法一：
 * 遍历，获取每种可能的差价并获取最大值
 * O(n^2)时间维度，会超时
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++){
    for (let j = i; j < prices.length; j++){
      const diff = prices[j] - prices[i]
      if (diff > 0) {
        profit = Math.max(diff, profit)
      }
    }
  }
  return profit
};

/**
 * 方法二：
 * 利润最大，买入价需要最优
 * 当下一个的价格小于上一个的时候默认以下个价格作为买入价
 * 当下一个的价格大于上一个的时候计算买入价下个价格的利润差并取最大值
 * O(n)时间维度
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let price = Infinity;
  for (let i = 0; i < prices.length; i++){
    if (prices[i] < price) {
      price = prices[i]
    } else {
      profit = Math.max(profit, prices[i] - price)
    }
  }
  return profit
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))