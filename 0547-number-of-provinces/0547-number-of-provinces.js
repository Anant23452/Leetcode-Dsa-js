/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let visited = new Set();
    let count = 0;
    function dfs(node) {
        visited.add(node);

        for (let neighbor = 0; neighbor < isConnected.length; neighbor++) {
            if (
                isConnected[node][neighbor] === 1 &&
                !visited.has(neighbor)
            ) {
                dfs(neighbor);
            }
        }
    }
    // outer loop to check connected graph 
    for (let node = 0; node < isConnected.length; node++) {
        if (!visited.has(node)) {
            dfs(node)
            count++;
        }
    }

    return count;
};