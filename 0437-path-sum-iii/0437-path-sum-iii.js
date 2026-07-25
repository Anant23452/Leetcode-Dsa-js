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
    function dfs(node){
        if(!node)return ;
        countPath(node,targetSum);
        dfs(node.left);
        dfs(node.right)

    }
    dfs(root)
     function countPath(node,remainSum){
        if(!node)return;
        remainSum-=node.val;
        if(remainSum===0)count++;
        countPath(node.left,remainSum);
        countPath(node.right,remainSum);
    }
   
   
    return count;
};