function maxProfit(prices: number[]): number {
  let minimumPrice = Infinity;
  let MaxProfit = 0;

  for (const price of prices) {
    if (price < minimumPrice) {
      minimumPrice = price; 
    } else {
      MaxProfit = Math.max(MaxProfit, price - minimumPrice);
    }
  }

  return MaxProfit;
}