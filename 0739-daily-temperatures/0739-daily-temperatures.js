/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let stack = [];
    let n = temp.length;
    let ans =new Array(n).fill(0);
    //push last element in stack
    stack.push(n-1);
    for(let i =n-2;i>=0;i--){
        while(stack.length){
            let top = stack[stack.length-1]
            if(temp[i]>=temp[top]){
                stack.pop()
            }else{
                ans[i]=top-i;
                break;
            }
        }
        if(stack.length==0){
            ans[i]=0
        }
        stack.push(i)
    }
    return ans;
};