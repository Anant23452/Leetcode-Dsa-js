/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {

    // checkck every connected graph
    let color = Array(graph.length).fill(-1);
    for (let i = 0; i < graph.length; i++) {
        if (color[i] === -1) {
            color[i] = 0;
            if (!dfs(i)) {
                return false;
            }


        }
    }

    function dfs(node) {
        for (let neighbor of graph[node]) {
            if (color[neighbor] === -1) {
                color[neighbor] = 1 - color[node]
                if (!dfs(neighbor)) {
                    return false;
                }

            }
            else {
                if (color[neighbor] === color[node]) {
                    return false;
                }
            }

        }
        return true;
    }
    return true;
};