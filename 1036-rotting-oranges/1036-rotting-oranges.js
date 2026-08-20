/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m= grid.length;
    let n = grid[0].length;
    let q =[];
    let minmax=0;
    //adding all rotten orange to queue
    for( let i =0;i<m;i++){
        for(let j =0;j<n;j++){
            if(grid[i][j]===2){
                q.push([i,j,0])
            }
        }
    }

    // making adjacent as rotten 
    while(q.length>0){
        let [x, y, max] = q.shift();
        //checking left
        if(x>0 && grid[x-1][y]===1){
            grid[x-1][y]=2;
            q.push([x - 1, y, max + 1])
        }
         //checking right
        if(x<m-1 && grid[x+1][y]===1){
            grid[x+1][y]=2;
            q.push([x + 1, y, max + 1])
        }
        //checking top 
        if(y<n-1 && grid[x][y+1]==1){
            grid[x][y+1]=2;
            q.push([x,y+1,max+1])
        }
        //checking bottom
        if(y>0 && grid[x][y-1]==1){
            grid[x][y-1]=2;
            q.push([x,y-1,max+1])
        }
         minmax= Math.max(minmax,max)
    }
    //checking if any grid elment not rotten after loop
    for(let i =0;i<m;i++){
        for(let j =0;j<n;j++){
            if(grid[i][j]==1){
                return -1
            }
        }
    }
    return minmax;
};