/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {

    //storing into graph 
    let graph = Array.from({ length: n + 1 }, () => []);
    for (let [u, v, wt] of times) {
        graph[u].push([v, wt])
    }


    //storing distance initial

    let dist = Array(n + 1).fill(Infinity);
    dist[k] = 0;



    // --------------------------------------------------
    // STEP 3: Min Heap
    // Stores [node, distance]
    // Smallest distance stays at the top
    // --------------------------------------------------

    class MinHeap {

        constructor() {
            this.heap = [];
        }

        // ----------------------------------------------
        // PUSH
        // Add element at the end
        // Then move it UP
        // ----------------------------------------------

        push(item) {

            this.heap.push(item);

            let index = this.heap.length - 1;

            while (index > 0) {

                let parent = Math.floor((index - 1) / 2);

                // Parent already has smaller distance
                if (this.heap[parent][1] <= this.heap[index][1]) {
                    break;
                }

                // Swap parent and current
                [this.heap[parent], this.heap[index]] =
                    [this.heap[index], this.heap[parent]];

                index = parent;
            }
        }


        // ----------------------------------------------
        // POP
        // Remove smallest element (root)
        // Then move last element DOWN
        // ----------------------------------------------

        pop() {

            if (this.heap.length === 0) {
                return null;
            }

            // Smallest element
            let smallest = this.heap[0];

            // Remove last element
            let last = this.heap.pop();

            // If heap is not empty
            if (this.heap.length > 0) {

                // Put last element at root
                this.heap[0] = last;

                let index = 0;

                while (true) {

                    let left = 2 * index + 1;
                    let right = 2 * index + 2;

                    // Assume current is smallest
                    let smallestIndex = index;

                    // Check left child
                    if (
                        left < this.heap.length &&
                        this.heap[left][1] < this.heap[smallestIndex][1]
                    ) {
                        smallestIndex = left;
                    }

                    // Check right child
                    if (
                        right < this.heap.length &&
                        this.heap[right][1] < this.heap[smallestIndex][1]
                    ) {
                        smallestIndex = right;
                    }

                    // Current is already smaller
                    if (smallestIndex === index) {
                        break;
                    }

                    // Swap
                    [this.heap[index], this.heap[smallestIndex]] =
                        [this.heap[smallestIndex], this.heap[index]];

                    index = smallestIndex;
                }
            }

            return smallest;
        }


        // Check if heap is empty
        isEmpty() {
            return this.heap.length === 0;
        }
    }


    //forming queque

    let pq = new MinHeap();

    pq.push([k, 0]);

    while (!pq.isEmpty()) {
        let [node, CurrDis] = pq.pop();
        if (CurrDis > dist[node]) {
            continue;
        }


        for (let [neighbor, wt] of graph[node]) {
            let newdist = dist[node] + wt;
            if (newdist < dist[neighbor]) {
                dist[neighbor] = newdist;
               pq.push([neighbor, newdist]);
            }
        }
    }
    // STEP 6: Find maximum shortest distance
    // --------------------------------------------------

    let answer = 0;

    for (let i = 1; i <= n; i++) {

        // Some node was never reached
        if (dist[i] === Infinity) {
            return -1;
        }

        answer = Math.max(answer, dist[i]);
    }

    return answer;
};