/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let ans = []
     let visited = new Set();
    let n = edges.length;
    let graph = Array.from({ length: n + 1 }, () => [])
    for (let [u, v] of edges) {

        graph[u].push(v);
        graph[v].push(u);

        visited = new Set();

        let result = dfs(u, -1);

        if (result) {
            return [u, v];
        }
    }
    // console.log(graph)
    //dfs approch 
   
    function dfs(node, parent) {
        visited.add(node);
        for (let neighbor of graph[node]) {
            // normal backward edge to parent
            if (neighbor === parent) {
                continue;
            }
            if (visited.has(neighbor)) {
                return [node, neighbor];

            }

            let result = dfs(neighbor, node);

            if (result) {
                return result;
            }

        }
    }

    return null;
};