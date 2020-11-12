/*
 @param {number[]} prices
 @return {number}
  */
let maxProfit = function(prices) {
  let profit = 0;
for (let i = 0; i < prices.length; i++) {
  for (let k = i + 1; k < prices.length; k++) {
    if (prices[k] - prices[i] > profit) {
      profit = prices[k] - prices[i];
    }
  }
}
return profit;
};
