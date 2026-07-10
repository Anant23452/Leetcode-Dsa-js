/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let n = s.length;
    let dp = new Array(n + 1).fill(0);
    dp[n] = 1;
    for (let i = n-1; i >=0; i--) {
    let twoDigit = Number(s.substring(i, i + 2));
        if (s[i] !== '0') {
            dp[i] += dp[i + 1];
           
        } else{
            dp[i]=0;
             continue;
        }
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i + 2];
        }
    }

return dp[0]
};