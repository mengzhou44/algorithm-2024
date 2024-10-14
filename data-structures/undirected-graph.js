// class Graph {
//      constructor() {
//          this.adjacencyList = {} 
//      }

//      addVertex(vertex) {
//          if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex]= []
//          }
//      }

//      addEdge(vertex1, vertex2) {
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)

//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)

//      }

//      print() {
//         for(let vertex of  Object.keys(this.adjacencyList)) {
//              console.log(`${vertex} ->  ${this.adjacencyList[vertex].join(',')}`)
//         }
       
//      }

// }





function Graph() {
     this.adjacencyList = {}
} 

Graph.prototype.addVertex = function(vertex) {
    if(!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex]=[]
    }
}

Graph.prototype.addEdge = function(vertex1, vertex2) {
    this.addVertex(vertex1)
    this.addVertex(vertex2)

    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
}


Graph.prototype.print = function() {
    const vertexList = Object.keys(this.adjacencyList)

    for(let vertex of vertexList) {
         console.log(`${vertex} -> ${this.adjacencyList[vertex].join(',')}`)
    }
}


const graph1 = new Graph()
graph1.addEdge('A', 'B')
graph1.addEdge('A', 'C')
 


graph1.print() 