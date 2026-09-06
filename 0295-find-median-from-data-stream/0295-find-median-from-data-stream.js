
var MedianFinder = function() {
    this.left = new MaxPriorityQueue(x=>x);
    this.right = new MinPriorityQueue(x=>x);
   
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.left.enqueue(num);
    this.right.enqueue(this.left.dequeue());
    if(this.right.size()>this.left.size()){
        this.left.enqueue(this.right.dequeue())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
 if(this.left.size()===this.right.size()){
        return  (this.left.front()+this.right.front())/2
    }else{
        return this.left.front()
    }
    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */