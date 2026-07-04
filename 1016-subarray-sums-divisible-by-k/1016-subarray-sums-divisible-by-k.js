/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let count = 0;
    let map = new Map();
    let currentsum = 0;
    map.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        currentsum += nums[i]
        
        reminder = currentsum % k;
        reminder = (reminder + k) % k;
        if (map.has(reminder)) {
            count += map.get(reminder);
            map.set(reminder, map.get(reminder) + 1);

        }
         else{map.set(reminder, 1)}
    }



    return count;
}
