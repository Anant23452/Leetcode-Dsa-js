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
var rob = function (root) {
    let dfs = (node)=>{
        //base case 
        if (!node) return [0, 0];
        //solve left
        let [leftRob, leftSkip] = dfs(node.left)

        //solve right
        let [rightRob, rightSkip] = dfs(node.right);

        //calculate current
        let rob = node.val + leftSkip + rightSkip;
        let skip = Math.max(leftRob, leftSkip) + Math.max(rightRob, rightSkip)


        

      return [rob, skip]
    }
   
    let ans =dfs(root)
 
    return Math.max(...ans)
   


};