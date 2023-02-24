// Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    if (prices[i] - min > profit) profit = prices[i] - min;
  }
  return profit;
};
