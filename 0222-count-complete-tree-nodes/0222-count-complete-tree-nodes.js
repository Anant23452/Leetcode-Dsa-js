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
 * @return {number}
 */
var countNodes = function(root) {
    function dfs(node){
        if(!node)return 0;
       let left= dfs(node.left);
       let right= dfs(node.right)
        return left+right+1;
    }
    return dfs(root)
};