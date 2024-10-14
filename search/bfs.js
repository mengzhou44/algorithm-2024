function bfs(maze, startRow, startCol) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  let queue = [[startRow, startCol]]

  let visited = []
  for (let row of maze) {
    visited.push(new Array(row.length).fill(false))
  }
  visited[startRow][startCol] = true

  while (queue.length > 0) {
    const [row, col] = queue.shift()

    if (maze[row][col] === 2) return true

    for (let [dr, dc] of dirs) {
      const newRow = row + dr
      const newCol = col + dc
      if (
        newRow >= 0 &&
        newRow < maze.length &&
        newCol >= 0 &&
        newCol < maze[0].length &&
        !visited[newRow][newCol] &&
        maze[newRow][newCol] !== 1
      ) {
        visited[newRow][newCol] = true
        queue.push([newRow, newCol])
      }
    }
  }

  return false
}

// Example maze
let maze = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 2],
  [0, 0, 0, 0, 0],
]

// Start BFS from the top-left corner
let result = bfs(maze, 0, 0)

console.log(result ? 'Path found!' : 'No path found.')
