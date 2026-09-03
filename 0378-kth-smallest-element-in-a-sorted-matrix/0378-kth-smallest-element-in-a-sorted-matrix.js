/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {

    //first we have to push first col of matrix into heap
    let n = matrix[0].length//length of first col in matrix
    let heap = new MinPriorityQueue(x => x.val);
    for (let i = 0; i < Math.min(k, n); i++) {
        heap.push(
            {
                val: matrix[i][0],
                row: i,
                col: 0
            }
        );
    }

    
    for (let c = 0; c < k - 1; c++) {
        let { val, row, col } = heap.pop();
        //add next element if exit
        if (col + 1 < n) {
            heap.push({ val: matrix[row][col + 1], row: row, col: col + 1 })
        }
    }
    return heap.pop().val;
};