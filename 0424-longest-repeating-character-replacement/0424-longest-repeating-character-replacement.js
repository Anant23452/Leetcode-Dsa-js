/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let x = 0;
    let maxLen = 0;
    let maxFreq = 0;
    let freq = new Map();

    for (let y = 0; y < s.length; y++) {

        // Increase frequency of s[y]
        freq.set(s[y],(freq.get(s[y])??0)+1)

        // Find highest frequency in current window
        for(const count of freq.values()){
            maxFreq= Math.max(maxFreq,count)
        }


        while ((y-x+1)-maxFreq>k) {

            // Decrease outgoing character frequency
            freq.set(s[x],(freq.get(s[x]))-1)
            // Delete zero-frequency entries
            if(freq.get(s[x])===0){
                freq.delete(s[x])
            }
            // Advance x
            x++;
            // Recalculate maxFreq
            for(const count of freq.values()){
                maxFreq= Math.max(maxFreq,count)
            }
        }

        // Update maxLen here
        maxLen= (maxLen,y-x+1)
    }

    return maxLen;
};