/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {


    let graph = Array.from({ length: n }, () => []);
    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u)
    }
    let visited = new Set();

    function bfs(source) {
        let q = [source];
        visited.add(source);
        while (q.length > 0) {
            let node = q.shift();
            if (node === destination) {
                return true;
            }
            for (let neighbor of graph[node]) {


                if (!visited.has(neighbor)) {
                    visited.add(neighbor)
                    q.push(neighbor)
                }

            }
        }
        return false;
    }
    return bfs(source);
};