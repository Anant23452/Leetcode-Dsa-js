/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (arr, x) {
    arr.push(x);
    console.log(arr);
    arr.sort((a, b) => a[0] - b[0])
    let prev = 0;
    let curr = 1;
    while (curr < arr.length) {
        if (arr[prev][1] >= arr[curr][0]) {
            arr[prev][0] = Math.min(arr[prev][0], arr[curr][0]);
            arr[prev][1] = Math.max(arr[prev][1], arr[curr][1]);
            arr.splice(curr, 1);
            
        }
        else {
            prev++;
            curr++
        }
    }
    return arr;

};