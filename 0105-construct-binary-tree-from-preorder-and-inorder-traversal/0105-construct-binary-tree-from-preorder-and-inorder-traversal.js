/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let map = new Map();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    let build = (preStart, inStart, inEnd) => {
        //no element
        if (inStart > inEnd) {
            return null
        }
        //find root;
        let rootval = preorder[preStart];
        //create root 
        let node = new TreeNode(rootval);
        let rootIndex = map.get(rootval);
        let leftSize = rootIndex - inStart;
        let left = build(preStart + 1, inStart, rootIndex-1)
          let right = build(
            preStart + leftSize + 1,
            rootIndex + 1,
            inEnd
        );


        //attaching childeren
        node.left =left;
        node.right=right

    return node;
    }
    return build(0, 0, inorder.length - 1);
    
};