
/**
 * @function DoublyLinkedList
 * @description 双向链表 学习来源：https://www.30secondsofcode.org/articles/s/js-data-structures-doubly-linked-list
 * @param nodes {Array{Object}} 节点元素数组
 */
class DoublyLinkedList{
  constructor() {
    // item { object }
    this.nodes = [
      // { value: 值, next: 上个节点, previous: 下个节点 }
    ]
  }
  get size() {
    return this.nodes.length
  }
  get head() {
    return this.size ? this.nodes[0] : null
  }
  get tail() {
    return this.size ? this.nodes[this.size-1] : null
  }
  /**
   * 检索索引处的元素
   */
  getAt(index) {
    return this.nodes[index]
  }
  /**
   * 清空双向链表
   */
  clear() {
    this.nodes = []
  }
  /**
   * 在特定的索引插入一个元素
   */
  insertAt(index, value) {
    const previous = this.nodes[index - 1] || null
    const next = this.nodes[index] || null
    const node = { value, previous, next }
    if (previous) previous.next = node
    if(next) next.previous = node
    this.nodes.splice(index, 0, node)
  }
  insertAtFirst(value) {
    this.insertAt(0, value)
  }
  insertAtLast(value) {
    this.insertAt(this.size, value)
  }
  /**
   * 移除特定索引处的元素
   */
  removeAt(index) {
    const previous = this.nodes[index - 1] || null
    const next = this.nodes[index] || null
    if (previous) previous.next = next
    if(next) next.previous = previous
    return this.nodes.splice(index, 1)
  }
  removeAtFirst() {
    this.removeAt(0)
  }
  removeAtLast() {
    this.removeAt(this.size - 1)
  }
  /**
   * 清空双向链表
   */
  reverse() {
    this.nodes = this.nodes.reduce((acc, cur, idx, init) => {
      let node = acc.length ? acc[0] : null
      cur = { value: cur.value, previous: null, next: node }
      if (node) {
        node.previous = cur
      }
      return [cur, ...acc]
    }, [])
  }
}

const list = new DoublyLinkedList()
list.insertAtFirst('AA')
list.insertAt(1,'A')
list.insertAt(2,'B')
list.insertAt(3,'C')
list.insertAt(4,'D')
list.insertAtLast('DD')
list.reverse()
console.log('list', list.nodes.map(item=> item.value))