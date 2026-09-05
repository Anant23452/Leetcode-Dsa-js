/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let heap = new MinPriorityQueue({
        compare:(a,b)=>{
            return a.val-b.val
        }
    })
    lists.forEach((list,i)=>{
        if(list)heap.enqueue(list);
    })
    let dummy = new ListNode(0);
    let tail = dummy;
    while(heap.size()){
        const node =heap.dequeue();
        tail.next = node;
        tail = tail.next;
        if(node.next){
            heap.enqueue(node.next)
        }
    }
    return dummy.next;
};