/*
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 * 示例 1：
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 *      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
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