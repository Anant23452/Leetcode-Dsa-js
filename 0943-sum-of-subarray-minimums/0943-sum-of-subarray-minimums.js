/**
 * @param {number[]} arr
 * @return {number}
 */
function getnsl(arr, n) {
    let result = [];
    let stack = []
   for (let i = 0; i < n; i++) {

    while (
        stack.length &&
        arr[stack[stack.length - 1]] > arr[i]
    ) {
        stack.pop();
    }

    result[i] = stack.length
        ? stack[stack.length - 1]
        : -1;

    stack.push(i);
}
    return result;
}
function getnsr(arr, n) {
    let result = [];
    let stack = []
  for (let i = n - 1; i >= 0; i--) {

    while (
        stack.length &&
        arr[stack[stack.length - 1]] >= arr[i]
    ) {
        stack.pop();
    }

    result[i] = stack.length
        ? stack[stack.length - 1]
        : n;

    stack.push(i);
}
    return result;
}
var sumSubarrayMins = function (arr) {
    let n = arr.length;
    let nsl = getnsl(arr, n)
    let nsr = getnsr(arr, n)
    let sum = 0;
      let MOD = 1000000007;
    for (let i = 0; i < n; i++) {
        let ls = i - nsl[i];
        let rs = nsr[i] - i;
        let totalways = ls * rs;
        let totalsum = arr[i] * totalways;
        sum = (sum + totalsum) % MOD;
    }
    return sum;
};