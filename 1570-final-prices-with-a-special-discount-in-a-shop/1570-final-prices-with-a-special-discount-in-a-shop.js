/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let stack = [];
    let result = [...prices];
    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {


            let combine = prices[stack[stack.length - 1]] - prices[i];
            result[stack.pop()] = combine;

        }
        stack.push(i)
        // console.log(stack)
    }
   
    return result;
};