
var WordDictionary = function () {
    this.root = {
        children: {},
        isEnd: false
    };
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (let ch of word) {
        if (!node.children[ch]) {
            node.children[ch] = {
                children: {},
                isEnd: false
            }
        }
        node = node.children[ch]
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
     let dfs = (node, index) => {

        // We processed the entire word
        if (index === word.length) {
            return node.isEnd;
        }

        let ch = word[index];

        // Normal character
        if (ch !== ".") {

            if (!node.children[ch]) {
                return false;
            }

            return dfs(node.children[ch], index + 1);
        }

        // '.' means ANY character
        for (let child of Object.values(node.children)) {

            if (dfs(child, index + 1)) {
                return true;
            }
        }

        return false;
    };

    return dfs(this.root, 0);




};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */