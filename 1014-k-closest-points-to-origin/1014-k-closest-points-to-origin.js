/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let dist= new Map();
    for(let pt of points){
        dist.set(pt,((pt[0]*pt[0])+(pt[1]*pt[1])))
    }
   
    let heap = new MaxPriorityQueue(x=>x[1])
    for(let [val,long] of dist){
        heap.enqueue([val,long]);
        if(heap.size()>k)heap.pop()
    }

    let ans =[]
   while(heap.size()){
    ans.push(heap.pop()[0])
   }
   return ans;
    
};