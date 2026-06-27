/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
    // let prev = 0;
    // let curr = 1;
    // let result = [];
    // result.push(arr[0]);
    // arr.sort((a, b) => a[0] - b[0])
    // while (curr < arr.length) {
    //     if (arr[prev][1] >= arr[curr][0]) {
    //         arr[prev][0] = Math.min(arr[prev][0], arr[curr][0]);
    //         arr[prev][1] = Math.max(arr[prev][1], arr[curr][1]);
    //         //    arr.splice(curr,1)
    //     }
    //     else {
    //         prev++;
    //         curr++
    //     }
    // }
    // return arr;




    arr.sort((a, b) => a[0] - b[0]);

    let result = [];

    result.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {

        let last = result[result.length - 1];

        if (last[1] >= arr[i][0]) {

            last[1] = Math.max(last[1], arr[i][1]);

        } else {

            result.push(arr[i]);

        }
    }

    return result;

};