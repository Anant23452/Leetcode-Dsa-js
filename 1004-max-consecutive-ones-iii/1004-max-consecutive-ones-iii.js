/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let x = 0;
    let max = 0;
    for (let y = 0; y < nums.length; y++) {
        if (nums[y] == 0) {
            k--;
        }
        while (k < 0) {
            if (nums[x] == 0) {
                k++;

            }
            x++
        }

        max = Math.max(max, y - x + 1)
    }
    return max;
}

