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
var goodNodes = function(root) {
    let maxso = root.val;
    let count =0;
    function dfs(curr,maxso){
        if(!curr)return 0;
        if(curr.val>=maxso){
            maxso=curr.val;
            count++
        }

        dfs(curr.left,maxso);
        dfs(curr.right,maxso);
        
       
    }
    dfs(root,maxso);
    return count;
    
};