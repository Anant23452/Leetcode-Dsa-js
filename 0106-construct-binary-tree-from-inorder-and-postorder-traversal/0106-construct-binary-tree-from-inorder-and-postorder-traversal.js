/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let  map = new Map();
    for(let i =0;i<inorder.length;i++){
        map.set(inorder[i],i);
    }
    let build =(posstart,instart,inend)=>{
        if(instart>inend){
            return null;
        }
        //postorder last =root
        let rootval = postorder[posstart];
        //create node
        let node = new TreeNode(rootval);
        //find root
        let rootIndex = map.get(rootval);
        //left subtree size
        let leftsize = rootIndex-instart;

        //right size 

        let rightsize = inend-rootIndex;

        ///build right first 
        let right = build(posstart-1,rootIndex+1,inend)
        let left =build(posstart-rightsize-1,instart,rootIndex-1);
        node.left =left;
        node.right=right;
        return node;
    }
    return build(postorder.length-1,0,inorder.length-1)
};