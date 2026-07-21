/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let ans=[];
    if(root===null)return [];
    let preorder=(curr)=>{
        ans.push(curr.val);
        for(child of curr.children){
         
            preorder(child);
        }
    }
    preorder(root)
    return ans;
};