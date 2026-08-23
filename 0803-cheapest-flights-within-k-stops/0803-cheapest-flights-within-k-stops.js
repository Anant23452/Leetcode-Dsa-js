/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {

    //step 1 lets make a graph 
    let graph = Array.from({length:n},()=>[]);
    for(let [ src, dst, price] of flights){
        graph[src].push([dst,price]);
    }
    // console.log(graph)

    //step-2 lets make a minprice initiate it as infinity
    let minPrice = Array(n).fill(Infinity);
    minPrice[src]=0;
    // console.log(minPrice)
    
    ///step 3 make a queuq
    //q is intialize with source 0 and price 0 and stops 0
    let q = [[src,0,0]]
    while(q.length>0){
        let [curr,currPrice,stops]=q.shift();
        if(stops>k){
            continue;
        }
        for(let [neighbor,neighborPrice] of graph[curr]){
            let newPrice = currPrice+neighborPrice;
            if(newPrice<minPrice[neighbor]){
                minPrice[neighbor]= newPrice;
                q.push([neighbor,newPrice,stops+1])
            }
        }
    }
    return minPrice[dst]===Infinity?-1:minPrice[dst]
};