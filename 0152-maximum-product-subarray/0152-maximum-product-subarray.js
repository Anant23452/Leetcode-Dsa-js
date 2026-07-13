/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length;
    let ltr = rtl =1;
    let total =-Infinity
    for(let i =0 ;i<n;i++){
        ltr*=nums[i];
        rtl*=nums[n-i-1];
        total=Math.max(total,ltr,rtl);
        if(ltr==0){
            ltr=1;
        }
        if(rtl ==0){
            rtl =1
        }
    }
    return total
};