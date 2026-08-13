/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    let state = Array(graph.length).fill(0);
    //maintain three state 
    //0- have't investigate this node
    //1 - currently investigationg this node;
    //2- complete investiong this node and prove it safe;

    function dfs(node) {
        if(state[node] == 1){
            return false;
        }
        if (state[node] == 2) {
            return true;
        }

        state[node] = 1;
        for(let neighbor of graph[node]){
            if (!dfs(neighbor)) {
                return false;
            }
        }
        //all neighbor are safe
        state[node]=2;
        return true

    }
    let ans = [];

    for (let i = 0; i < graph.length; i++) {
        if (dfs(i)) {
            ans.push(i);
        }
    }

   
    return ans;
};