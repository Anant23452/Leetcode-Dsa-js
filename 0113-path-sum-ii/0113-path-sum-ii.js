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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let ans = [];
    let eachlevel = []
    let sum = (node, remainSum) => {
        //base case 
        if (!node) return ;
        eachlevel.push(node.val);
        remainSum -= node.val;
        if (!node.left && !node.right) {
            if (remainSum === 0) {
                ans.push([...eachlevel])
                
            }
        return  eachlevel.pop();
        }

            sum(node.left,remainSum);
            sum(node.right,remainSum)
            eachlevel.pop();
    }
    sum(root, targetSum);
    return ans;
};