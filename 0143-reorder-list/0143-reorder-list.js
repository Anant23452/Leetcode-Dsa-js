/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }// split
    let second = slow.next;
    slow.next = null;

    // reverse
    let curr = second
    let prev = null;
    while (curr) {
        let temp = curr.next;
        curr.next = prev
        prev = curr;
        curr = temp;
    }
    console.log(prev)

    //merge
    let first = head;
    let sec = prev
    while (sec) {
    let t1 = first.next;
    let t2 = sec.next
        first.next = sec;
        sec.next = t1;
        first = t1;
        sec = t2
    }
   
};