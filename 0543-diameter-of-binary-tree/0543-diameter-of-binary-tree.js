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
var diameterOfBinaryTree = function(root) {
    let diametersize=0;
    let diameter=(root)=>{
    if(!root)return 0;
        let left = diameter(root.left);
        let right = diameter(root.right);
        diametersize= Math.max(diametersize,left+right);
        return 1+Math.max(left,right)
    }
    diameter(root)
    return diametersize;
};