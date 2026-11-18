/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sum = 0;

    while (x) {
        let last = x % 10;
        if(sum * 10 + last>2147483647 || sum * 10 + last<-2147483648)return 0;
        sum = sum * 10 + last;
        // console.log(sum)
        x = Math.trunc(x / 10);
        // console.log(x)
        
    }

    return sum


};