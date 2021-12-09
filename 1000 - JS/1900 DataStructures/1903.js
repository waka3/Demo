/**
 * @function Graph
 * @description 图, 学习来源：https://www.30secondsofcode.org/articles/s/js-data-structures-graph
 */
class Graph{
  constructor(directed = true) {
    this.nodes = []
    this.edges = new Map() // 不会重复
    this.directed = directed
  }
  addNode(key, value) {
    this.nodes.push({key, value})
  }
  addEdge(a, b, weight) {
    this.edges.set(JSON.stringify([a, b]), { a, b, weight })
    if (!this.directed) {
      this.edges.set(JSON.stringify([b, a]), { a: b, b: a, weight })
    }
  }
  removeNode(key) {
    this.nodes = this.nodes.filter(item => item.key !== key)
    const values = [...this.edges.values()]
    values.forEach(item=> {
      if(item.a === key || item.b === key) this.edges.delete(JSON.stringify([a, b]))
    });
  }
  removeEdge(a, b) {
    this.edges.delete(JSON.stringify([a, b]))
    if (!this.directed) {
      this.edges.delete(JSON.stringify([b, a]))
    }
  }
  findNode(key) {
    return this.nodes.find(item => item.key === key)
  }
  hasEdge(a, b) {
    if (this.directed) {
      return this.edges.has(JSON.stringify([a, b]))
    } else {
      return this.edges.has(JSON.stringify([b, a]))
    }
  }
  setEdgeWeight(a, b, weight) {
    this.edges.set(JSON)
  }
  getEdgeWeight(a, b) {
    if (this.directed) {
      return this.edges.get(JSON.stringify([a, b])).weight
    } else {
      return this.edges.get(JSON.stringify([b, a])).weight
    }
  }
}

const graph = new Graph()
graph.addNode('a', 'aa')
graph.addNode('b', 'bb')
graph.addNode('c', 'cc')
graph.addNode('d', 'dd')

graph.addEdge('a', 'c', 1)
graph.addEdge('b', 'c', 2)
graph.addEdge('c', 'b', 2)
graph.addEdge('d', 'c', 3)

console.log(graph)