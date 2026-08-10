/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    let component = 0;
    let visited = new Set()

    let graph = Array.from({ length: n }, () => [])
    for (let [u, v] of connections) {
        graph[u].push(v);
        graph[v].push(u)
    }
    if (connections.length < n - 1) {
        return -1
    }



    //components
    for (let node = 0; node < n; node++) {

        if (!visited.has(node)) {
            dfs(node);
            component++
        }

    }
    function dfs(node) {
        visited.add(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }
    return component - 1
};