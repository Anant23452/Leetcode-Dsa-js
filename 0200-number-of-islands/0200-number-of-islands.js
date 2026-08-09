/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;

    function dfs(row, col) {

        grid[row][col] = 0;
        for (let [dr, dc] of direction) {
            let nr = row + dr;
            let nc = col + dc;

            if (
                nr >= 0 &&
                nr < grid.length &&
                nc >= 0 &&
                nc < grid[0].length &&
                grid[nr][nc] === "1"
            ) {
                dfs(nr, nc);
            }
        }


    }
    let direction = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]


    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(i, j)
            }
        }
    }
    return count;
};