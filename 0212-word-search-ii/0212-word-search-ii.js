/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    //fill word in tries
    let root = {
        children: {},
        isEnd: false
    }
    let result = []
    for (let word of words) {
        let node = root;
        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = {
                    children: {},
                    isEnd: false
                }
            }
            node = node.children[ch]
        }
        node.isEnd = true;
        node.word = word;
    }
    let dfs = (row, col, node) => {

        let ch = board[row][col];
        if (!node.children[ch]) {
            return;
        }
        //mover tries node ;
        node = node.children[ch]

        //if find the word then
        if (node.isEnd) {
            result.push(node.word)
             node.isEnd = false;
        }

        //mark current cell visited 
        let orignal = board[row][col];
        board[row][col] = "#";

        //explore the directon 
        let direction = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];
        for (let [dr, dc] of direction) {
            let nr = row + dr;
            let nc = col + dc;
            //boundary visited check
            if (
                nr < 0 ||
                nr >= board.length ||
                nc < 0 ||
                nc >= board[0].length ||
                board[nr][nc] === "#"
            ) {
                continue;
            }
            // Continue DFS
            dfs(nr, nc, node);
        }





        board[row][col] = orignal 
    }
    // 4. Start DFS from every cell
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            dfs(r, c, root);
        }
    }

    ///undo 

    return result;
};