/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    //row length;
    let rows = matrix.length;
    //column length;
    let colms = matrix[0].length;
    let l = 0
    let r = rows*colms-1;
    while (l <= r) {
        let mid = Math.floor((l+r)/2)
        let row = Math.floor(mid/colms);
        let col = mid%colms
        if (matrix[row][col]=== target) { return true; }
        else if (matrix[row][col]< target) {
            l=mid+1;
        }
        else {
            r = mid-1
        }
    }

    return false;
};