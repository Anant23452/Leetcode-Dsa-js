/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
    let map = new Set(friends);
    let arr = []
    for (let person of order) {
        if (map.has(person)) {
            arr.push(person)
        }
    }

    return arr
}
