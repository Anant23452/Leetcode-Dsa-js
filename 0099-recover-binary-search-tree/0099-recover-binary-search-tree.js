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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let prev = first = second = null;

    let dfs = (node) => {
        if (!node) return;
        dfs(node.left)
        if (prev !== null && prev.val > node.val) {
            // something happen
            if (first === null) {
                first = prev;
            }

            second = node;


        }
        prev = node
        dfs(node.right)

    }
    dfs(root)
    let temp = first.val;
    first.val = second.val;
    second.val = temp;

    return root;
};