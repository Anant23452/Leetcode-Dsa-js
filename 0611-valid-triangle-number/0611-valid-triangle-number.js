/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    let n =nums.length;
    let count=0;
    for(let i=0;i<n-2;i++){
        for(let j =i+1;j<n-1;j++){
            for(let k =j+1;k<n;k++){
                if(nums[i]+nums[j]>nums[k]){
                    count++;
                }
            }
        }
    }
    return count;
};