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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let ans=[]
    let path =[]
    let dfs= (node)=>{
        if(!node)return ;
        path.push(node.val)
        if(!node.left && !node.right){
          ans.push([...path])

        }
        dfs(node.left);
        dfs(node.right)
        path.pop()
    }
    dfs(root)
   let output = ans.map((singleNumber)=>singleNumber.join("->"))
    return output;
};