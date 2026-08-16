/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rowLength= matrix.length;
    let colLength= matrix[0].length;
   
    for(let i =0;i<rowLength;i++){
        for(let j=i+1;j<colLength;j++){
           //swap
           [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
        }
    }
     for (let i = 0; i < rowLength; i++) {
        let left = 0;
        let right = rowLength - 1;

        while (left < right) {
            [matrix[i][left], matrix[i][right]] =
            [matrix[i][right], matrix[i][left]];

            left++;
            right--;
        }
    }
    return matrix;
};