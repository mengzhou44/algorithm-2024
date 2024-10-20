class LinkNode {
  constructor(val) {
    this.val = val
    this.prev = null
  }
}

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

  getShortestPath(from, to) {
    let queue = [new LinkNode(from)]

    const visited = {}
    visited[from] = true

    while (queue.length > 0) {
      const node = queue.shift()
    
      const neighbours = this.adjacentList[node.val]

      for (let nei of neighbours) {
        if (!visited[nei]) {
          visited[nei] = true
          let temp = new LinkNode(nei)
          temp.prev = node

          if (nei === to) {
            this.printPath(temp)
            return
          }
          queue.push(temp)
        }
      }
    }

    console.log('No path found!')
  }

  printPath(temp) {
    let result = [temp.val]
    let parent = temp.prev
    while (parent !== null) {
      result.unshift(parent.val)
      parent = parent.prev
    }
    console.log(result.join('->'))
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

graph.getShortestPath('A', 'E')
