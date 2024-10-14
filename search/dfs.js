function dfs(maze, row, col, visited) {
     if (row<0 || row>= maze.length  || col<0 || col>= maze[0].length || visited[row][col] || maze[row][col] === 1) {
         return false 
     }

     if (maze[row][col] === 2)  return true 

     visited[row][col] = true

     if (dfs(maze, row+1, col, visited)||
         dfs(maze, row-1, col, visited)||
         dfs(maze, row, col+1, visited)||
         dfs(maze, row, col-1, visited)
    )  {
         return true 
    }

    visited[row][col] = false 

    return false 

}


let maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 2],  
    [0, 0, 0, 1, 0]
  ]

let visited = [] 
for(let row of maze) {
    visited.push(new Array(row.length).fill(false))
}

console.log ({visited})

console.log(dfs(maze, 0, 0, visited))