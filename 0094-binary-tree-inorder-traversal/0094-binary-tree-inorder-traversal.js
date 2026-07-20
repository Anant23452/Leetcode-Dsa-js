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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let ans =[]
    function inorder(curr){
        if(curr===null)return;
        inorder(curr.left);
        ans.push(curr.val);
        inorder(curr.right)
    }
    inorder(root);
    return ans;
};