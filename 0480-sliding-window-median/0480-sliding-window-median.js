/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {

    // smaller half
    const low = new MaxPriorityQueue(x => x);

    // larger half
    const high = new MinPriorityQueue(x => x);

    // value -> how many copies should be deleted later
    const delayed = new Map();

    // IMPORTANT:
    // these are VALID element counts,
    // not actual heap.size(), because heaps may contain stale elements
    let lowSize = 0;
    let highSize = 0;

    const result = [];

    // -----------------------------
    // Add number
    // -----------------------------
    function addNum(num) {

        if (lowSize === 0 || num <= low.front()) {
            low.enqueue(num);
            lowSize++;
        } else {
            high.enqueue(num);
            highSize++;
        }

        balance();
    }

    // -----------------------------
    // Remove number lazily
    // -----------------------------
    function removeNum(num) {

        // mark num for future deletion
        delayed.set(
            num,
            (delayed.get(num) || 0) + 1
        );

        // decide which heap logically contains num
        if (num <= low.front()) {
            lowSize--;

            // if num is already at root,
            // we can physically remove it now
            if (num === low.front()) {
                prune(low);
            }

        } else {

            highSize--;

            if (high.size() && num === high.front()) {
                prune(high);
            }
        }

        balance();
    }

    // -----------------------------
    // Remove stale heap-top values
    // -----------------------------
    function prune(heap) {

        while (heap.size()) {

            const num = heap.front();

            if (!delayed.has(num)) {
                break;
            }

            heap.dequeue();

            delayed.set(
                num,
                delayed.get(num) - 1
            );

            if (delayed.get(num) === 0) {
                delayed.delete(num);
            }
        }
    }

    // -----------------------------
    // Keep heap sizes balanced
    // low can have at most 1 extra
    // -----------------------------
    function balance() {

        if (lowSize > highSize + 1) {

            high.enqueue(low.dequeue());

            lowSize--;
            highSize++;

            prune(low);

        } else if (lowSize < highSize) {

            low.enqueue(high.dequeue());

            highSize--;
            lowSize++;

            prune(high);
        }
    }

    // -----------------------------
    // Find current median
    // -----------------------------
    function getMedian() {

        prune(low);
        prune(high);

        if (k % 2 === 1) {
            return low.front();
        }

        return (low.front() + high.front()) / 2;
    }


    // =============================
    // Build first window
    // =============================

    for (let i = 0; i < k; i++) {
        addNum(nums[i]);
    }

    result.push(getMedian());


    // =============================
    // Slide window
    // =============================

    for (let i = k; i < nums.length; i++) {

        // element leaving window
        const outgoing = nums[i - k];

        // element entering window
        const incoming = nums[i];

        removeNum(outgoing);

        addNum(incoming);

        result.push(getMedian());
    }

    return result;
};