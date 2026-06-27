/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (arr, x) {
    
    let res =[];
    let i =0;
    let n =arr.length;

    // add all elment before newinterval 
    while(i<n && arr[i][1]<x[0]){
        res.push(arr[i])
        i++;
    }
    // merge opverlapping interval 
    while(i<n && arr[i][0]<=x[1]){
        x[0]=Math.min(arr[i][0],x[0]);
        x[1]=Math.max(arr[i][1],x[1]);
        i++;
    }
    res.push(x);
    //add remain interva;
    while(i<n){
        res.push(arr[i]);
        i++;
    }
    return res;
   

};