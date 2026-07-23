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
var maxLevelSum = function (root) {
    let q = [root];
    if (!root) return null;
    let max = -Infinity;
    let level = 1
    let anslevel = 1
    let front = 0;
    while (front<q.length) {
        let ans = 0;
        let size = q.length-front;
        while (size--) {
            let node = q[front++];
            ans += node.val;
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        if (ans > max) {
            max = ans;
            anslevel = level
        }
        level++
    }
    return anslevel;
};