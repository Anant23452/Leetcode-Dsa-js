/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
   
    
    let heap = new MaxPriorityQueue({
        compare:(a,b)=>{
            if(a[1]!==b[1]){
                return b[1]-a[1]
            }else{
                return b[0]-a[0]
            }
        }
    })
    // console.log(heap)
    for(let no of arr){
        heap.enqueue([no,Math.abs(no-x)]);
        if(heap.size()>k)heap.dequeue()
    }
    let ans =[];
    while(heap.size()>0){
        ans.push(heap.dequeue()[0])
    }
    return ans.sort((a,b)=>a-b)
};