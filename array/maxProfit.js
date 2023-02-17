// Best Time to Buy and Sell Stock II

const maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

// Test case No#1
// const prices = [7, 1, 5, 3, 6, 4];
// const expectedOutput = 7;

// Test case No#2
// const prices = [1, 2, 3, 4, 5];
// const expectedOutput = 4;

// Test case No#3
// const prices = [7, 6, 4, 3, 1];
// const expectedOutput = 0;

// Test case No#4
const prices = [7, 1, 5, 3, 6, 7];
const expectedOutput = 8;

const actualOutput = maxProfit(prices);
errorMsg = `Actual output is ${actualOutput} whereas expected output is ${expectedOutput}`;
console.assert(actualOutput === expectedOutput, { errorMsg });
