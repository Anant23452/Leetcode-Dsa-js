/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let x=0;
    let max =0;
    let n = nums.length;
    for(let i=0;i<n;i++){
       if(nums[i]==0){
        x=i+1;
       }
       max= Math.max(max,i-x+1)
    }
      
    return max;
};