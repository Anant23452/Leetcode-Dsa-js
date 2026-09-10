/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    const heap = new MinPriorityQueue(x => x);
    for (let i = 0; i < heights.length - 1; i++) {
        let diff = heights[i + 1] - heights[i];
        //if next building is small /equla
        if (diff <= 0) {
            continue;
        }
        heap.enqueue(diff)
        if (heap.size() > ladders) {
            let smallestclimb = heap.dequeue();
            bricks -= smallestclimb;
        }//not enought bricks to corss this 
        if (bricks < 0) {
            return i
        }

    }
    return heights.length - 1;
};