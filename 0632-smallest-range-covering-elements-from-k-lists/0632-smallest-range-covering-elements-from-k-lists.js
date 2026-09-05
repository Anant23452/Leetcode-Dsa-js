/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
    let currMax = -Infinity;
    let bestStart = 0;
    let bestEnd = Infinity
    let heap = new MinPriorityQueue({
        compare: (a, b) => {
            return a[0] - b[0]
        }
    })
    nums.forEach((num, i) => {
        heap.enqueue([num[0], i, 0])
        currMax = Math.max(currMax, num[0])
    })

    console.log(currMax)
    let res = [];
    while (heap.size()) {
        let [val, listIndex, index] = heap.dequeue();
        let currMin = val
        if (currMax - currMin < bestEnd - bestStart) {
            bestStart = currMin;
            bestEnd = currMax;
        }
        console.log(currMin)
        if (index + 1 < nums[listIndex].length) {
            let nextVal = nums[listIndex][index + 1];

            heap.enqueue([nextVal, listIndex, index + 1]);

            currMax = Math.max(currMax, nextVal);

        }else{
            break;
        }
    };
       return [bestStart, bestEnd];
}