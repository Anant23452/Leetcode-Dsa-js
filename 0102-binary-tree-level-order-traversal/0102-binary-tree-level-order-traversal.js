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
    let q = [];
    q.push(root)
    let ans =[]
    if(!root)return [];
    while(q.length){
        let size = q.length;
        let level=[];
        while(size){
            let node = q.shift();
            level.push(node.val)
        node.left && q.push(node.left);
        node.right && q.push(node.right);
        size--
        }
     
        ans.push(level)

    }
    return ans;
};