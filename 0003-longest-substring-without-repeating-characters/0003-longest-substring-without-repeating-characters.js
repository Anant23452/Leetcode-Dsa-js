/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     let x =0;
     let seen = new Set();
     let  maxLen= 0;
     if(s.length==1){
        return 1;
     }
     for(let y =0;y<s.length;y++){
        while(seen.has(s[y])){
            seen.delete(s[x])
            x++;
            
        }
            maxLen= Math.max(y-x+1,maxLen)
       
        seen.add(s[y])
     }
     return maxLen
};