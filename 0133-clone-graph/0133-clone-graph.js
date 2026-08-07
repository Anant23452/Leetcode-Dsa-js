/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    let map = new Map()
    function dfs(node){
        if(map.has(node)){
            return map.get(node);
        }
        let clone = new _Node(node.val);
        map.set(node,clone);

        for(let neighbor of node.neighbors){
            clone.neighbors.push(dfs(neighbor))
        }
        return clone;
    }
    return dfs(node)
};