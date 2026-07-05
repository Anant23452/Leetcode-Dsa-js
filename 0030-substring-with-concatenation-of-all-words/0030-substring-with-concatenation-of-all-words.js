/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 *//**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || words.length === 0) return [];
    
    const wordLen = words[0].length;
    const totalWords = words.length;
    const totalLen = wordLen * totalWords;
    const res = [];
    
    // Store frequency counts for each target word
    const wordCount = {};
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    // Shift offsets by wordLen to hit every possible word alignment boundary
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let currentCount = {};
        let wordsMatched = 0;
        
        while (right + wordLen <= s.length) {
            // Pick a word token from the right edge
            const word = s.substring(right, right + wordLen);
            right += wordLen;
            
            if (word in wordCount) {
                currentCount[word] = (currentCount[word] || 0) + 1;
                wordsMatched++;
                
                // If a valid word appears more times than required, shrink from the left
                while (currentCount[word] > wordCount[word]) {
                    const leftWord = s.substring(left, left + wordLen);
                    currentCount[leftWord]--;
                    wordsMatched--;
                    left += wordLen;
                }
                
                // If our window contains exactly the correct multi-word match
                if (wordsMatched === totalWords) {
                    res.push(left);
                }
            } else {
                // Invalid token encountered: clear window entirely and jump left ahead
                currentCount = {};
                wordsMatched = 0;
                left = right;
            }
        }
    }
    
    return res;
};
