/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
    //----------------
    // making graph 
    //---------------
    let graph = Array.from({ length: n }, () => []);

    //____________________________
    // Filling graph edges and succProb
    //_____________________
    for (let i = 0; i < edges.length; i++) {
        let [u, v] = edges[i];
        let prob = succProb[i];
        graph[u].push([v, prob]);
        graph[v].push([u, prob])
    }
    //_____________________
    //Storing intial value of maxProb 
    //_____________________
    let maxProb = Array(n).fill(0);
    maxProb[start_node] = 1;

    //_________________Initializing Queqe with start value and prob is 1
    let q = [[start_node, 1]]
    while (q.length > 0) {
        //______________ pop out of node and curr prob value _____________
        let [node, prob] = q.shift();


        for (let [neighbor, edgeProb] of graph[node]) {
            //_______probabilty of reaching neighbor through this node____
            let newProb = edgeProb * prob;

            if (newProb > maxProb[neighbor]) {

                maxProb[neighbor] = newProb;

                q.push([neighbor, newProb])
            }
        }
    }
    return maxProb[end_node]
};