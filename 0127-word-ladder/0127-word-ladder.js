/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let set = new Set();
    //put word into set
    for (let word of wordList) {
        set.add(word)
    }
    // console.log(set)
    if (!set.has(endWord)) {
        return 0;
    }
    // /bfs quequ
    let q = [[beginWord, 1]];

    //bfs traversal
    while (q.length > 0) {
        let [word, steps] = q.shift();
        for (let i = 0; i < word.length; i++) {
            let char = word.split("");
            let original = char[i];
            for (let ch = 97; ch <= 122; ch++) {
                // change word[i];
                char[i] = String.fromCharCode(ch);
                let newWord = char.join("");
                //checking newWord
                if (set.has(newWord)) {
                    if (newWord === endWord) {
                        return steps + 1;
                    }
                    q.push([newWord, steps + 1]);
                    set.delete(newWord);
                }

            }
            char[i] = original;
        }
    }
    return 0;
};