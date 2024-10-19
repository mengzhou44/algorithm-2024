function hasCycleDirected(graph) {
  let visited = new Set()
  let recStack = new Set()

  function dfs(node) {
    if (recStack.has(node)) return true
    if (visited.has(node)) return false

    recStack.add(node)
    visited.add(node)

    for (let nei of graph[node] || []) {
      if (!visited.has(nei)) {
        if (dfs(nei)) return true
      } else if (recStack.has(nei)) {
        return true
      }
    }

    recStack.delete(node)

    return false
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      if (dfs(node)) return true
    }
  }

  return false
}

const directedGraph = {
  A: ['B'],
  B: ['C'],
  C: ['A'], // Cycle here
  D: [],
}

console.log(hasCycleDirected(directedGraph))
