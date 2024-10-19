class Graph {
  constructor() {
    this.adjacentList = {}
  }

  addVertex(vertex) {
    this.adjacentList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    this.adjacentList[vertex1].push(vertex2)
    this.adjacentList[vertex2].push(vertex1)
  }

  bfs(start) {
    let queue = [start]

    const visited = {}
    visited[start] = true

    const result = []
    while (queue.length > 0) {
      const vertex = queue.shift()
      result.push(vertex)
      const neighbours = this.adjacentList[vertex]

      for (let nei of neighbours) {
        if (!visited[nei]) {
          visited[nei] = true
          queue.push(nei)
        }
      }
    }
    return result
  }

  dfs(start) {
    let stack = [start]

    const visited = {}
    visited[start] = true

    const result = []
    while (stack.length > 0) {
      const vertex = stack.pop()
      result.push(vertex)
      const neighbours = this.adjacentList[vertex]

      for (let nei of neighbours) {
        if (!visited[nei]) {
          visited[nei] = true
          stack.push(nei)
        }
      }
    }
    return result
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

// console.log(graph.bfs('A'));

console.log(graph.dfs('A'))
