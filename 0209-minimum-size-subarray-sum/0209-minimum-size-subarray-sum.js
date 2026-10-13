/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    // let n = nums.length;
    // let count = Infinity;

    // for (let x = 0; x < n; x++) {
    //     if (nums[x] >= target) return 1;
    //     let y = x + 1;
    //     let sum = nums[x]
    //     let num = 0;


    //     while (y < n) {
    //         sum += nums[y]

    //         if (sum >= target) {
    //             num = y - x + 1;
    //             count = Math.min(count, num)
    //             break;

    //         }
    //         y++;


    //     }





    // }
    // if (count === Infinity) {
    //     return 0;
    // } else {
    //     return count;
    // }


    // optimized approch 

    let x = 0;
    let sum =0;
    let count =Infinity;
    for(let y =0;y<nums.length;y++){
        if(nums[y]>=target)return 1;
        sum+=nums[y];
        while(sum>=target){
            sum-=nums[x];
            count= Math.min(count,y-x+1)
            x++;
        }
    }
    if(count==Infinity){
        return 0;
    }else{
        return count;
    }



};