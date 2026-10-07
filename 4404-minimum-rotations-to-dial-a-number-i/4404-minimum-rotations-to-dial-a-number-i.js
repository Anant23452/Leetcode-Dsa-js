/**
 * @param {string} s
 * @return {number}
 */
var minRotations = function(s) {
    let curr =0;
    let result =0;
    for(let c of s){
        let digit = c -'0';
        let d = (digit-curr +10)%10;
        result+= Math.min(d,10-d)
        curr = digit;
    }
    return result;
};