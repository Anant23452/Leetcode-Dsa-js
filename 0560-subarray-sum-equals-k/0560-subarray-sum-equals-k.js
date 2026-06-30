/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(arr, k) {
    let count =0;
    for(let i =0;i<arr.length;i++){
        let ans =0;
        for(let j=i;j<arr.length;j++){
            ans +=arr[j];
            if(ans==k){
                count++;
            }
        }
    }
    return count;
};