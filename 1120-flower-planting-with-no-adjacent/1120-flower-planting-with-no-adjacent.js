/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
    let graph = Array.from({ length: n }, () => [])
    for (let [a, b] of paths) {
        a--;
        b--
        graph[a].push(b);
        graph[b].push(a)

    }
    let color = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
    let used = Array(5).fill(false);
    for(let  neighbor of graph[i]){
        if(color[neighbor]!==0){
            used[color[neighbor]]=true;
        }
    }
    //choose an unused flower
    for(let flower =1; flower<=4;flower++){
        if(!used[flower]){
            color[i]=flower;
            break;
        }
    }

    }
    return color;
}
   
   
