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
var zigzagLevelOrder = function (root) {
    let q = [root];
    let ans = [];
    if (!root) return [];
    let leftToRight = true;
    while (q.length) {
        let size = q.length;
        let level = []

        while (size--) {
            let node = q.shift();
            if (leftToRight) {
                level.push(node.val);
              
            }

            else {
                level.unshift(node.val);
               
            }

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right)
        }







    ans.push(level);
leftToRight = !leftToRight;
    }


    return ans
};