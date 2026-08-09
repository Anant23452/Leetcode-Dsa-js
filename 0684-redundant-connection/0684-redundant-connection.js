/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let parent = Array.from({ length: edges.length + 1 }, (_, i) => i);
    //find code
    function find(x){
        if(parent[x]===x){
            return x;
        }
        parent[x]=find(parent[x]);
        return parent[x]
    }

    //union of edges
    for(let [x,y] of edges){
        let rx = find(x);
        let ry = find(y);
        if(rx===ry){
            return [x,y]
        }
        parent[rx]=ry;

    }
};