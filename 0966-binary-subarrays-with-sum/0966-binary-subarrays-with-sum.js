/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let map = new Map();
    map.set(0, 1);
    let prefix = count = 0;
    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];
        let prevprefix = prefix - goal;
        if (map.has(prevprefix)) {
            count += map.get(prevprefix)
           
        }
        
           map.set(prefix, (map.get(prefix) || 0) + 1);
        
    }
    return count;
};