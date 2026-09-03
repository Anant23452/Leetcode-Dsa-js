/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // Added 'new' keyword. Removed the unused comparator function.
    const heap = new myMinHeap(); 
    
    for (let n of nums) {
        heap.push(n); // Calls the push method now fixed below
        if (heap.size() > k) {
            heap.pop(); // Calls the pop method now fixed below
        }
    }
    return heap.peek();
};

class myMinHeap {
  constructor() {
    this.heap = [];
  }

  // Added a size method so your loop check works
  size() {
    return this.heap.length;
  }

  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0]; 
  }

  // Renamed from insert to push to match your loop logic
  push(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  // Renamed from remove to pop to match your loop logic
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); 
    this.sinkDown(0);
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const length = this.heap.length;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}
