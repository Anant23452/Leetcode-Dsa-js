/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    let color=Array(n).fill(-1);
    //build adjecent list
    let graph =Array.from({length:n},()=>[]);
    for(let [a,b] of dislikes){
        a--;
        b--;
        graph[a].push(b);
        graph[b].push(a);
    }
    for(let i =0;i<n;i++){
        if(color[i]===-1){
            color[i]=0;
            if(!dfs(i))return false;
        }
    }
    function dfs(node){
        for(let neighbor of graph[node]){
            if(color[neighbor]===-1){
                color[neighbor]=1-color[node];
                if(!dfs(neighbor)){
                    return false;
                }
            }else{
                if(color[neighbor]===color[node]){
                    return false;
                }
            }
        }
        return true;
    }
    return true;
};