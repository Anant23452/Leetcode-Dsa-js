/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = [];
    let n = stack.length;
    for (let i = 0; i < s.length; i++) {
        while (stack.length && stack[stack.length - 1] === s[i]) {
            stack.pop();
            i++
        }
        stack.push(s[i])
    }
    let ans =[]
    while(stack.length){
        ans.push(stack[stack.length-1]);
        stack.pop()
    }
    let result = ans.reverse().join("")
    
    return result;
};