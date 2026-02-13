function maxProfit(prices: number[]): number {
    let bestFirstTradeBuy = -Infinity;
    let bestFirstTradeSell = 0;
    let bestSecondTradeBuy = -Infinity;
    let bestSecondTradeSell = 0;

    for (const price of prices) {
        bestFirstTradeBuy = Math.max(bestFirstTradeBuy, - price);
        bestFirstTradeSell = Math.max(bestFirstTradeSell, bestFirstTradeBuy + price);

        bestSecondTradeBuy = Math.max(bestSecondTradeBuy, bestFirstTradeSell - price);
        bestSecondTradeSell = Math.max(bestSecondTradeSell, bestSecondTradeBuy + price);
    }

    return bestSecondTradeSell;
};