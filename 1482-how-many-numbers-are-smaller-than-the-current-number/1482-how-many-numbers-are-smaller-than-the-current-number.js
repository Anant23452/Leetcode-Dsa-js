var smallerNumbersThanCurrent = function(nums) {
    
    let sorted = [...nums].sort((a,b) => a-b);

    let map = {};

    for(let i = 0; i < sorted.length; i++){
        if(map[sorted[i]] === undefined){
            map[sorted[i]] = i;
        }
    }

    let res = [];

    for(let num of nums){
        res.push(map[num]);
    }

    return res;
};