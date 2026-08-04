/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    

    let transpose = Array.from({ length: col }, () => new Array(row));
    for(let i =0;i<row;i++){
        for(j=0;j<col;j++){
            transpose[j][i]= matrix[i][j]
        }
    }
    return transpose
};