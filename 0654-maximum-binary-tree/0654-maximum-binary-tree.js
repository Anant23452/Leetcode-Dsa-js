/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {


    let build = (start, end) => {
        if (start > end) {
            return null;
        }
        let maxIndex = start;

        for (let i = start; i <= end; i++) {
            if (nums[i] > nums[maxIndex]) {
                maxIndex = i;
            }
        }
        let rootVal = nums[maxIndex];

        //creat node
        let node = new TreeNode(rootVal)


        let left = build(start, maxIndex - 1);
        let right = build(maxIndex + 1, end)


        // connectiong root to nodes 
        node.left = left;
        node.right = right;
        return node;


    }
    return build(0, nums.length - 1)

};