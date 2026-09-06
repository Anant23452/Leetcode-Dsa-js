/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {

    let heap = new MinPriorityQueue(
        {
            compare:(a,b)=>(nums1[a[0]] + nums2[a[1]])-(nums1[b[0]] + nums2[b[1]])
        }
    )

    nums1.forEach((_,i)=>{
        heap.enqueue([i,0])
    })
    let res =[];
    while(heap.size()  &&  res.length<k){
        //pop i ,j 
        let [i,j] = heap.dequeue();
        //push to result
        res.push([nums1[i],nums2[j]]);

        if(j+1<nums2.length){
            heap.enqueue([i,j+1])
        }
    }
    return res;
};