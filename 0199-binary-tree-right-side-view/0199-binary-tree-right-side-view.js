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
var rightSideView = function (root) {
    if (!root) return [];
    let q = [root];
    let ans = [];
    
   while(q.length){
    let size = q.length;
 
    while(size){
        let node =q.shift();
        if(size===1)ans.push(node.val)
        
        if(node.left)q.push(node.left);
        if(node.right)q.push(node.right);
        
        size--
    }
  
   }
    return ans;
};