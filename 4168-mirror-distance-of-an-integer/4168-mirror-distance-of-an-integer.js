/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(num) {
    let n = Math.abs(num);
    let reverse=0;
    while(n>0){
        let lastIndex= n%10;
        reverse = (reverse*10)+lastIndex;
        n= Math.floor(n/10)

    }
    // console.log(reverse)
    let ans =Math.abs(reverse-num)
    return ans;
};