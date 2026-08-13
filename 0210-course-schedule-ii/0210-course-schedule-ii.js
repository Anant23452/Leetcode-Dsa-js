/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (n, prerequisites) {
    let graph = Array.from({ length: n }, () => []);
    let indegree = Array(n).fill(0);
    for (let [course, pre] of prerequisites) {
        graph[pre].push(course)
        indegree[course]++;
    }
    // console.log(graph)
    // console.log(indegree)
    //checkingindgree 
    let q = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            q.push(i)
        }
    }
    let ans = []
    while (q.length > 0) {
        let node = q.shift();
        ans.push(node)
        for (let neighbor of graph[node]) {
            indegree[neighbor]--;

            if (indegree[neighbor] === 0) {
                q.push(neighbor)
            }
        }
    }
    if (ans.length !== n) {
        return [];
    }
    return ans;
};