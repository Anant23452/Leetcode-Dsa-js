/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(arr) {
    arr.sort((a,b)=>a[1]-b[1]);
    let prev = arr[0];
    let count =0;
    for(let i =1;i<arr.length;i++){
        let curr = arr[i];
        if(curr[0]<prev[1]){
            count++;
        }else{
            prev=curr
        }
    }
    return count
};