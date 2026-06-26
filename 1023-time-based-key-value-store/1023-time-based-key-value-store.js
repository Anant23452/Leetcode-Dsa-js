
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)){
        this.map.set(key,[]);
    }
    this.map.get(key).push([timestamp,value])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.has(key)){
        return ""
    }
    let arr = this.map.get(key);
    let l =0;
    let r = arr.length-1;
    let ans ="";
    while(l<=r){
        let m = Math.floor((l+r)/2);
        if(arr[m][0]==timestamp)return arr[m][1];

        if(arr[m][0]<timestamp){
            ans = arr[m][1];
            l=m+1
        }else{
            r=m-1
        }
    }
    return ans;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */