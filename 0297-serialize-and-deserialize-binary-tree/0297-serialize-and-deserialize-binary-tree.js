/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

        let result = [];
    let dfs = (node)=>{
        if(node===null){
            result.push("#")
            return
        }
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);

    }
    dfs(root)
    return result.join(",");
    
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let values = data.split(",");
    let index =0;
    let build = ()=>{
        let value = values[index]
        index++;
        if(value==="#"){
            return null
        }
        let node = new TreeNode(Number(value));
        node.left= build();
        node.right= build();
        return node
    }
    return build();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */