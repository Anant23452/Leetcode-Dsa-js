/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
      let map ={};
    let n = nums.length;
    for(let i=0;i<n;i++){
        if(map[nums[i]]!==undefined){
            return true;
        }
        map[nums[i]]=1
    }
    return false
};