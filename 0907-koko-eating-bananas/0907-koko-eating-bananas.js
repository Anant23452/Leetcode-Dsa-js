/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    let ans =0;
    
    while(l<=r){
    let hr =0;
        let m = Math.floor((l+r)/2)
       for(let pile of piles){
         hr += Math.ceil(pile/m)
       }
        if(hr<=h){
            ans =m
            r = m-1
        }
        else{
            l= m+1
        }
        
    }
    return ans;
};