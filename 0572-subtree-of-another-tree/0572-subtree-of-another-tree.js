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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) return false;
    
    // 1. Check if the tree starting at current node matches subRoot exactly
    if (isSameTree(root, subRoot)) return true;
    
    // 2. Otherwise, check if subRoot is in the left OR right child
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// Helper function to check if two trees are completely identical
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};