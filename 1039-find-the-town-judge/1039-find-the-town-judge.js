/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let incoming = Array(n + 1).fill(0);
    let outgoing = Array(n + 1).fill(0);
    for (let [a, b] of trust) {
        outgoing[a]++;
        incoming[b]++;

    }
    for (let i = 1; i <= incoming.length; i++) {
        if (incoming[i] === n - 1 && outgoing[i] == 0) return i;
    }
    return -1
};