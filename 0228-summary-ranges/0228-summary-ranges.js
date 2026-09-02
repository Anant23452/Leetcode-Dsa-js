/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {

    let n = nums.length
    if (n == 0) return [];
    let x = nums[0]
    let ans = []
    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] !== 1) {
            if (x === nums[i - 1]) {
                ans.push(`${x}`);
            } else {
                ans.push(`${x}->${nums[i - 1]}`);
            }
            x = nums[i]
        }
      

    }
      if (x === nums[n - 1]) {
            ans.push(`${x}`);
        } else {
            ans.push(`${x}->${nums[n - 1]}`);
        }
    return ans;

};