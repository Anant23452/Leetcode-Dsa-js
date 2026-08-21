/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {

    let redGraph= Array.from({length:n},()=>[]);
    let blueGraph= Array.from({length:n},()=>[]);
    // fill red graph
    for(let [a,b] of redEdges){
        redGraph[a].push(b);
        
    }
    //fill blue graph
    for(let [a,b] of blueEdges){
        blueGraph[a].push(b)
    }
    //distance answer 
    let ans = Array(n).fill(-1);
    ans[0]=0;

    //visted[node][0]= reached using red
    //visited[node][1]= reached using blue;
    let visited = Array.from({length:n}, ()=>[false,false])
    //bfs
    let q = [[0,"none",0]];
  
    
    while(q.length>0){
        let [node,lastcolor,distance]=q.shift();
        if( lastcolor ==="none"){
            //red
            for(let neighbor of redGraph[node]){
                if(!visited[neighbor][0]){
                    visited[neighbor][0]=true;

                    if (ans[neighbor] === -1) {
                        ans[neighbor] = distance + 1;
                    }
                    q.push([neighbor,"red",distance+1])
                }
            }
            //blue
            for(let neighbor of blueGraph[node]){
                if(!visited[neighbor][1]){
                    visited[neighbor][1]=true;

                    if (ans[neighbor] === -1) {
                        ans[neighbor] = distance + 1;
                    }
                    q.push([neighbor,"blue",distance+1])
                }
            }
            
            
        }
        if(lastcolor==="red"){
             for(let neighbor of blueGraph[node]){
                if(!visited[neighbor][1]){
                    visited[neighbor][1]=true;
                       if (ans[neighbor] === -1) {
                        ans[neighbor] = distance + 1;
                    }
                    q.push([neighbor,"blue",distance+1])
                }
            }
        }
        if(lastcolor ==="blue"){
                for(let neighbor of redGraph[node]){
                if(!visited[neighbor][0]){
                    visited[neighbor][0]=true;
                       if (ans[neighbor] === -1) {
                        ans[neighbor] = distance + 1;
                    }
                    q.push([neighbor,"red",distance+1])
                }
            }
        }

    }
    return ans;
};