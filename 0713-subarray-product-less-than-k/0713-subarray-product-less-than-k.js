/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let x = 0;
    let multi = 1;
    let count = 0;
    let courner = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < k) {
            courner++;
        }
    }
    if (courner === 0) {
        return 0;
    } else {
        for (let y = 0; y < nums.length; y++) {
            multi *= nums[y];
            while (multi >= k) {

                multi = multi / nums[x]
                x++;

            }

            count += y - x + 1

        }
    }

    return count;

};