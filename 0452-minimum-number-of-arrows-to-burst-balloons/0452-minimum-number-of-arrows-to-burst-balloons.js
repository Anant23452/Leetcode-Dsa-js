/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=>a[1]-b[1])
    let n = points.length;
    let prev=0;
    let curr =1;
    let arrow =1;
    while(curr<n){
        if(points[curr][0]>points[prev][1]){
            arrow+=1
            prev =curr
        }
        
        curr++
    }
    return arrow
};