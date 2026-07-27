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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    let target = key;
    let dfs = (node) => {
        if (!node) return null
        if (node.val === target) {
            // 1st condition when node is leaf
            if (!node.left && !node.right) {
                return null;
            }
            //2nd case when left node
            if (node.right === null) {
                let temp = node.left;
                return temp
            }
            //3rd case when right node
            if (node.left === null) {
                let temp = node.right;

                return temp

            }
            //4th case when both right and left exit
            else {
                // 1. Find successor
                let temp = node.right;

                while (temp.left) {
                    temp = temp.left;
                }

                // 2. Copy value
                node.val = temp.val;

                // 3. Delete duplicate
                target = temp.val;
                node.right = dfs(node.right);
                target = key;

                // 4. Return current node
                return node;
            }

        }
        if (node.val < target) {
            //go right
            node.right = dfs(node.right);
        }
        if (node.val > target) {
            //go left
            node.left = dfs(node.left)
        }
        return node
    }
   return  dfs(root)
    
};