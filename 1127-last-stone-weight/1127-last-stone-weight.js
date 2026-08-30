/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let pq = MaxPriorityQueue.fromArray(stones);
    while (pq.size()>1) {
        let p = pq.dequeue();
        let q = pq.dequeue();
        if (p !== q) {

            pq.enqueue(p - q);
        }

    }
    return pq.size() ? pq.front() : 0;
};