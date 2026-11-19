/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let x =0;
    let max =0;
    let map = new Map();
    for(let y =0;y<fruits.length;y++){
        map.set(fruits[y],(map.get(fruits[y])??0)+1);
        if(map.size>2){
            map.set(fruits[x],map.get(fruits[x])-1);
            if(map.get(fruits[x])===0){
                map.delete(fruits[x])
            }
                x++;
        }
        max= Math.max(max,y-x+1)
    }
    return max;
};