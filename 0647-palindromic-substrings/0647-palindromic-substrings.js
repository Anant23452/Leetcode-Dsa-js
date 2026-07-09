/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length;
    let dp = Array.from({length:n},()=>Array(n).fill(null));
    if(n<=1)return 1;
    let max =0;

    // /first
    for(let i =0;i<n;i++){
        dp[i][i]=true;
        max++;
    }
    //second
    for(let i =0;i<n-1;i++){
        if(s[i]==s[i+1]){
            dp[i][i+1]=true;
            max++
        }
        
    }
    for(let len =3;len<=n;len++){
        for(let i =0;i<=n-len;i++){
            let j =i+len-1;
            if(s[i]===s[j] &&  dp[i+1][j-1]){
                dp[i][j]=true;
                max++
            }
        }
    }
    return max
};