/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {



    let heap = new MaxPriorityQueue(
        {
            compare: (f1, f2) => {
                const [a, b] = f1;
                const [c, d] = f2;
                return (b * c) - (a * d);
            }
        }
    )
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            heap.enqueue([arr[i], arr[j]])
            if (heap.size() > k) heap.dequeue()

        }


    };
    return heap.front()
}