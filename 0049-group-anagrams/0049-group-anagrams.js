/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {};
    for(let i =0;i<strs.length;i++){
        let sortedArr=strs[i].split("").sort().join();
    if(!obj[sortedArr]){
           obj[sortedArr] = [strs[i]];
        }
        else{
            obj[sortedArr].push(strs[i]);
        }
    }
    return Object.values(obj)
};