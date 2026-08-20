/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
  let dist = Array.from({ length: m }, () => Array(n).fill(-1));
    let q =[]
    //filing value 0 into q
    for(let i=0;i<m;i++){
        for(let j =0;j<n;j++){
            if(mat[i][j]==0){
                dist[i][j] = 0;
                q.push([i,j])
            }
        }
    }
    while(q.length){
        let [x,y]= q.shift();
        //chekc left
        if( x>0 && dist[x-1][y]===-1){
            dist[x-1][y]=dist[x][y]+1;
            q.push([x-1,y]);
        }
         //chekc right
        if( x<m-1 && dist[x+1][y]===-1){
            dist[x+1][y]=dist[x][y]+1;
            q.push([x+1,y]);
        }
        //check top 
        if(y<n-1 && dist[x][y+1]===-1){
            dist[x][y+1]=dist[x][y]+1;
            q.push([x,y+1])
        }
        //check bottom
        if(y>0 && dist[x][y-1]===-1){
            dist[x][y-1]=dist[x][y]+1;
            q.push([x,y-1])
        }
    }
    return dist;
};