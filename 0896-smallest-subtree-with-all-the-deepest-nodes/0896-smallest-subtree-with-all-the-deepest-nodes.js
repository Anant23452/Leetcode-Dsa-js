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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    let dfs = (node) => {
        if (!node) {
            return {
                height: 0,
                node: null
            };
        }
        let left = dfs(node.left);
        let right = dfs(node.right);
       
        if (left.height > right.height) {
            return {
                height: left.height + 1,
                node: left.node
            }

        }
        else if (left.height < right.height) {
            return {
                height: right.height + 1,
                node: right.node
            }

        } else {
            return {
                height: left.height + 1,
                node: node
            }


        }
        
        


    }
    return dfs(root).node
};