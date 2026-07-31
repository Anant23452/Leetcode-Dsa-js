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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
    let map = new Map();
    for (let i = 0; i < postorder.length; i++) {
        map.set(postorder[i], i)
    }

    let build = (preStart, preEnd, postStart, postEnd) => {
        // no node
        if (preStart > preEnd) {
            return null;
        }

        // only one node
        if (preStart === preEnd) {
            return new TreeNode(preorder[preStart]);
        }
        let rootVal = preorder[preStart];

        //create node
        let node = new TreeNode(rootVal);

        // find leftroot in preorder
       let leftRoot = preorder[preStart + 1];

        //find leftroot in postorder
        let leftRootIndex = map.get(leftRoot);

        //left subtree size from start to rootindex;
        let leftSize = leftRootIndex - postStart + 1;

        //left
        let left = build(preStart + 1, preStart + leftSize , postStart, leftRootIndex,);

        let right = build(preStart + leftSize + 1, preEnd, leftRootIndex + 1, postEnd - 1)

        node.left=left;
        node.right=right;

        return node
    }
    return build(0, preorder.length - 1, 0, postorder.length - 1)

};