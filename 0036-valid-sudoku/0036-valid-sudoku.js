/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = board[i][j];
            if (val == ".") continue;
            let rowKey = val + "in row" + i;
            let colKey = val + "in col" + j;
            let boxKey = val + "in box" + Math.floor(i / 3) + "-" + Math.floor(j / 3);
            if (set.has(rowKey) || set.has(colKey) || set.has(boxKey)){
                return false
            }
             set.add(rowKey);
    set.add(colKey);
    set.add(boxKey);
        }

    }
   return true;
};