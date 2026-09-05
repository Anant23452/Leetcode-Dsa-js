/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let  freq = new Map();
    for(let char of s)freq.set(char,(freq.get(char) || 0)+1);
    console.log(freq)
    
    const heap = new MaxPriorityQueue((x)=>x[1]);
    for(let [char,count] of freq){
        heap.enqueue([char,count])
    }
    // console.log(heap)
    // console.log(heap.dequeue())
    let ans =[];
    while(heap.size()>0){
        let c = heap.dequeue();
        // console.log(c[0]);
        // console.log(c[1])
        while(c[1]){
            ans.push(c[0]);
            c[1]--;
        }
        
    }
    return ans.join("");
};