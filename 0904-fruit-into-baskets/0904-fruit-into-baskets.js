/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let x = 0;
    let max = 0;
    let bucket = new Map();
    // let set = {}
    for (let i = 0; i < fruits.length; i++) {
         const currentFruit = fruits[i];
         bucket.set(currentFruit, (bucket.get(currentFruit) ?? 0) + 1);
        while (bucket.size > 2) {
            //remove count of map
            bucket.set(fruits[x], bucket.get(fruits[x]) - 1)
            //if fruits count is 0 then deleter the fruits
            if (bucket.get(fruits[x]) === 0) {
                bucket.delete(fruits[x])
            }

            x++;
        }
        max = Math.max(max, i - x + 1);

    }
    return max;
};