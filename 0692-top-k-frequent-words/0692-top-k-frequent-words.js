/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let freq = new Map();
    for (let word of words) {
        freq.set(word, (freq.get(word) || 0) + 1)
    }
   

   const heap = new MinPriorityQueue({
    compare: (a, b) => {

        // Rule 1: smaller frequency = worse
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }

        // Rule 2: same frequency
        // alphabetically larger word = worse
        return b[0].localeCompare(a[0]);
    }
});
    for (let [val, count] of freq) {
        heap.enqueue([val, count]);
        if (heap.size() > k) heap.dequeue()
    }

    let ans = []
    while (heap.size()) {

        ans.push(heap.dequeue()[0])
    }
    return ans.reverse();


};