/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    //grahp
    let graph = Array.from({ length: numCourses }, () => []);

    //in degreee
    let indegree = Array(numCourses).fill(0);

    // builde graph + indegree 
    for (let [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course);
        indegree[course]++;
    }

    //bfs
    let count = 0;
    let q = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            q.push(i);
        }

    }
    while (q.length > 0) {
        let node = q.shift()

        count++;

        for (let neighbor of graph[node]) {
            // What happens to indegree[neighbor]?
          
                  indegree[neighbor]--
           
          
            // When should neighbor go into q?
            if (indegree[neighbor] === 0) {
                q.push(neighbor)
            }
        }
    }
    return count === numCourses;
};