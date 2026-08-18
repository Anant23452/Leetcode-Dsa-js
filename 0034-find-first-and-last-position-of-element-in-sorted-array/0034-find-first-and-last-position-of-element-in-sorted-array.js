/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, target) {
  

    let ans = [-1,-1];
    //first we check target in left side 
     let l =0;
     let r = arr.length-1;
     while(l<=r){
        let m = Math.floor(l+(r-l)/2);
        if(arr[m]>=target){
            r = m-1;
        }
        else{
            l = m+1
        }
     }
     if(l<arr.length && arr[l]== target ) ans[0]= l;

     //rigth most 
     l=0;
     r= arr.length-1;
     while(l<=r){
        let m = Math.floor(l+(r-l)/2);
        if(arr[m]<=target){
            l= m+1;
        }else{
            r =m-1;
        }
     }
     if(r>=0 && arr[r]==target) ans[1]=r;

     return ans;
};
