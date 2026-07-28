/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l =0;
    let n = nums.length;
    let r =n-1;
    while(l<=r){
        let m = Math.floor(l+(r-l)/2);
        if(target>nums[m] && nums[m]==nums[n-1]){
            return n;
        }
        if(target<nums[m] && nums[m]===nums[0]){
            return 0;
        }
        if(nums[m]===target){
            return m;
        }
        
        else if(nums[m]<target){
            if(target<nums[m+1]){
                return m+1
            }
            l=m+1;
        }
        else{
            if(target>nums[m-1]){
                return m;
            }
            r=m;
        }
    }
};