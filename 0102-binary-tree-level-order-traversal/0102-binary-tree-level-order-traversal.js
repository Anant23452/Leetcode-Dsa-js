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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans =[];
    if(!root)return [];
    let traverse = (curr,level)=>{
        if(!ans[level]){
            ans[level]=[];
        };
        ans[level].push(curr.val);
        curr.left && traverse(curr.left,level+1);
        curr.right && traverse(curr.right,level+1)
    }
    traverse(root,0)
    return ans;
};