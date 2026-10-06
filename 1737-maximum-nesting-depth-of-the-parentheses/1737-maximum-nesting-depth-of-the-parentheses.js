/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = best =0;
    for(let c of s){
        if(c=="("){
            depth+=1;
        }else if(c==")"){
            depth-=1
        }
        best= Math.max(depth,best)
    }
    return best;
};