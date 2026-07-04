/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map =new Map();
    let prefix=0;
    let maxLength=0;
    let count=0;
    // Base case: prefix sum of 0 occurs at index -1
        map.set(0, -1);
    for(let i=0;i<nums.length;i++){
   
        if(nums[i]===0){
            nums[i]=-1
        }

    }
    for(let i =0;i<nums.length;i++){
        prefix+=nums[i];
        
        if(!map.has(prefix)){
            map.set(prefix,i)
        }
        else{
         let currentLength = i - map.get(prefix);
        maxLength = Math.max(maxLength, currentLength);
        }
    }
  
    return maxLength;
};
