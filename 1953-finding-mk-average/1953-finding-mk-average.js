// /**
//  * @param {number} m
//  * @param {number} k
//  */
// var MKAverage = function(m, k) {
//     this.m = m;
//     this.k = k
//      this.queue = [];
//      this.middleSum = 0;
//      //decide exact structure;
//      this.low=null
//      this.middle= null;
//      this.high = null;
// };

// /** 
//  * @param {number} num
//  * @return {void}
//  */
// MKAverage.prototype.addElement = function(num) {
//     this.queue.push(num);
//     //keep last m element;
//     if(this.queue.length>this.m){
//         this.queue.shift();
//     }
// };

// /**
//  * @return {number}
//  */
// MKAverage.prototype.calculateMKAverage = function() {
//     //not enought lement yet;
//     if(this.queue.length<this.m){
//         return -1
//     }
//     //copy becaz we dont'w atn to destroy origtinal arrival
//     let  arr =[...this.queue]
//     arr.sort((a,b)=>a-b);
//     //remove k smaller k larger
//     const middle = arr.slice(this.k , this.m- this.k);
//     let sum =0;
//     for(const num of middle){
//         sum+=num;
//     }
//     return Math.floor(sum/(this.m-2*this.k))
// };

// /** 
//  * Your MKAverage object will be instantiated and called as such:
//  * var obj = new MKAverage(m, k)
//  * obj.addElement(num)
//  * var param_2 = obj.calculateMKAverage()
//  */

/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function(m, k) {
    this.m = m;
    this.k = k;

    this.queue = [];

    // LC 1825 values are bounded
    this.MAX = 100000;

    // count of values
    this.countBIT = new Array(this.MAX + 2).fill(0);

    // sum of values
    this.sumBIT = new Array(this.MAX + 2).fill(0);
};

/**
 * Fenwick update
 */
MKAverage.prototype.updateBIT = function(bit, index, delta) {
    while (index <= this.MAX + 1) {
        bit[index] += delta;
        index += index & -index;
    }
};

/**
 * Fenwick prefix query
 */
MKAverage.prototype.queryBIT = function(bit, index) {
    let sum = 0;

    while (index > 0) {
        sum += bit[index];
        index -= index & -index;
    }

    return sum;
};

/**
 * Add new element to stream
 * @param {number} num
 */
MKAverage.prototype.addElement = function(num) {

    this.queue.push(num);

    // add num
    this.updateBIT(this.countBIT, num, 1);
    this.updateBIT(this.sumBIT, num, num);

    // keep only last m elements
    if (this.queue.length > this.m) {

        const old = this.queue.shift();

        // remove old
        this.updateBIT(this.countBIT, old, -1);
        this.updateBIT(this.sumBIT, old, -old);
    }
};

/**
 * Return sum of smallest "count" elements
 */
MKAverage.prototype.sumOfSmallest = function(count) {

    if (count <= 0) {
        return 0;
    }

    let left = 1;
    let right = this.MAX;

    // find value where cumulative count reaches "count"
    while (left < right) {

        const mid = Math.floor((left + right) / 2);

        const currCount = this.queryBIT(
            this.countBIT,
            mid
        );

        if (currCount >= count) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    const value = left;

    // how many elements are strictly smaller
    const countBefore = this.queryBIT(
        this.countBIT,
        value - 1
    );

    // their total sum
    const sumBefore = this.queryBIT(
        this.sumBIT,
        value - 1
    );

    // how many copies of "value" still needed
    const remaining = count - countBefore;

    return sumBefore + remaining * value;
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function() {

    if (this.queue.length < this.m) {
        return -1;
    }

    const leftPart = this.sumOfSmallest(this.k);

    const withoutLargestK =
        this.sumOfSmallest(this.m - this.k);

    const middleSum =
        withoutLargestK - leftPart;

    return Math.floor(
        middleSum / (this.m - 2 * this.k)
    );
};