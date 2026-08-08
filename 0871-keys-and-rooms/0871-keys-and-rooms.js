/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let visited = new Set();

    function dfs(node) {
        visited.add(node)
        for (let neighbor of rooms[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor)
            }

        }

    }
    dfs(0)
    return visited.size === rooms.length;

};