/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(arr, arrM) {
    let obj={};
    for(let i =0;i<arr.length;i++){
        obj[arr[i]]=(obj[arr[i]] || 0)+1;
    }
    for(let i =0;i<arrM.length;i++){
        if(!obj[arrM[i]] && arrM.length==arr.length){
            return false
        }
        --obj[arrM[i]]
    }
    for(let char in obj){
        if(obj[char]>0){
            return false
        }
    }
    return true;
};