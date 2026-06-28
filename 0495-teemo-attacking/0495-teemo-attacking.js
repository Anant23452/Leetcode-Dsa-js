/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(arr, duration) {
    let total =0;
    for(let i =0;i<arr.length-1;i++){
        let gap = arr[i+1]-arr[i];
        total+=Math.min(gap,duration)
    }
    total+=duration;
    return total;
};