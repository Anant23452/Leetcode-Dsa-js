/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count=0;
    let runningSum=0;
    let map = new Map();
    map.set(0, 1);
    let target= targetSum
    function dfs(node,runningSum){
        if(!node)return;
        runningSum+=node.val;
        count+=map.get(runningSum-target) || 0;
      map.set(runningSum, (map.get(runningSum) || 0) + 1);
        dfs(node.left,runningSum);
        dfs(node.right,runningSum);
        //backtrack
      map.set(runningSum, map.get(runningSum) - 1);

      
    }
    dfs(root,runningSum)
    
   
    return count;
};