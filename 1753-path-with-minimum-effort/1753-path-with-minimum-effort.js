/**
 * @param {number[][]} heights
 * @return {number}

 */
class EffortMinHeap {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);

        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (
                this.heap[parent][this.heap[parent].length - 1] <=
                this.heap[index][this.heap[index].length - 1]
            ) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        let smallest = this.heap[0];
        let last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;

            let index = 0;

            while (true) {
                let left = 2 * index + 1;
                let right = 2 * index + 2;

                let smallestIndex = index;

                if (
                    left < this.heap.length &&
                    this.heap[left][this.heap[left].length - 1] <
                    this.heap[smallestIndex][this.heap[smallestIndex].length - 1]
                ) {
                    smallestIndex = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right][this.heap[right].length - 1] <
                    this.heap[smallestIndex][this.heap[smallestIndex].length - 1]
                ) {
                    smallestIndex = right;
                }

                if (smallestIndex === index) {
                    break;
                }

                [this.heap[index], this.heap[smallestIndex]] =
                    [this.heap[smallestIndex], this.heap[index]];

                index = smallestIndex;
            }
        }

        return smallest;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}


var minimumEffortPath = function (heights) {

    let m = heights.length;
    let n = heights[0].length;

    let dist = Array.from(
        { length: m },
        () => Array(n).fill(Infinity)
    );

    dist[0][0] = 0;

    let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    let pq = new EffortMinHeap();

    pq.push([0, 0, 0]);

    while (!pq.isEmpty()) {

        let [x, y, effort] = pq.pop();

        // Ignore old/outdated state
        if (effort > dist[x][y]) {
            continue;
        }

        // Destination
        if (x === m - 1 && y === n - 1) {
            return effort;
        }

        for (let [dx, dy] of directions) {

            let nx = x + dx;
            let ny = y + dy;

            if (
                nx >= 0 &&
                nx < m &&
                ny >= 0 &&
                ny < n
            ) {

                let diff = Math.abs(
                    heights[x][y] - heights[nx][ny]
                );

                let newEffort = Math.max(
                    effort,
                    diff
                );

                if (newEffort < dist[nx][ny]) {

                    dist[nx][ny] = newEffort;

                    pq.push([nx, ny, newEffort]);
                }
            }
        }
    }

    return dist[m - 1][n - 1];
};
