/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let map = {};
    let res = [];
    stack.push(nums2[0])
    for (let i = 1; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            let smaller = stack.pop();
            map[smaller] = nums2[i];
        }
        stack.push(nums2[i])

    }
    while (stack.length > 0) {
        let val = stack.pop();
        map[val] = -1;
    }
    for (let num of nums1) {
        res.push(map[num]);
    }
    return res;
};