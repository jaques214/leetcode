//const prices = [7,1,5,3,6,4]
//const prices = [7,6,4,3,1]
//const prices = [2,1,2,1,0,1,2]

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let maxProfit = 0
    let left = 0 // buy
    let right = 1 // sell

    while (right < prices.length) {
        if (prices[left] >= prices[right]) {
            left = right;
        }

        const currentProfit = prices[right] - prices[left]; // sell - buy

        if(currentProfit > maxProfit) maxProfit = currentProfit

        right++;
    }

    return maxProfit;
};

console.log(maxProfit(prices))