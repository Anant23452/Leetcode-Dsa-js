/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS={};
    let mapT={};
    if(s.length !==t.length)return false;
    for(let i =0;i<s.length;i++){
        if(mapS[s[i]]==undefined && mapT[t[i]]==undefined){
            mapS[s[i]]=t[i];
            mapT[t[i]]=s[i]
        }
        else if(mapS[s[i]]!==t[i] || mapT[t[i]]!==s[i]){
            return false;
        }
    }
    return true;
};