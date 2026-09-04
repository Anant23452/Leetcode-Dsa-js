/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = new Map();
    for(const num of nums){
        freq.set(num,(freq.get(num) || 0)+1);
    }
    // console.log(freq)
    const heap = new MinPriorityQueue(x => x[1]);
    for(const [val,count] of freq){
        heap.enqueue([val,count]);
        if(heap.size()>k)heap.dequeue()
    }
     const ans = [];

    while (heap.size() > 0) {
        ans.push(heap.pop()[0]);
    }

    return ans;
};