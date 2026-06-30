/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length ==0)return 0
    let set = new Set();
    for(let i =0;i<nums.length;i++){
        set.add(nums[i]);
    }
    let result = [...set];
    result.sort((a,b)=>a-b);
    let max=ans=1;
    for(let i =0;i<result.length;i++){
        if(result[i+1]-result[i]==1){
            max++;
            ans= Math.max(max,ans)
        }
        else{
            max =1
        }
    }
    return ans; 
};