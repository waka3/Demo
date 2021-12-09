/**
 * @function LinkedList
 * @description JS迭代器（ES6引入） 学习来源：https://www.30secondsofcode.org/articles/s/javascript-iterators
 * @param nodes {Array} 节点元素数组
 * for (let value of [Symbol.iterator]) {} -> TypeError: myList is not iterable
 * for (let prop/index in 枚举对象)
 * 一、可迭代协议规定可迭代行为：可迭代对象必须实现 @@iterator 方法
 * [Symbol.iterator](){} 无参，返回值为符合迭代器协议的对象
 * 二、迭代器协议规定迭代器行为：需要实现拥有以下语义的 next() 方法
 * next(){
 *  // done：true 迭代完毕, false 可以产生序列中的下一个值
 *  return {done: boolean, value: done为true时被忽略}
 * }
 */
class LinkedList {
  constructor(data) {
    this.data = data
    this.index = 0
  }
  [Symbol.iterator]() {
    return {
      next: () => {
        const key = this.index
        if(this.index < this.data.length ) {
          this.index++
          return { done: false, value: this.data[key]}
        }
        return { done: true, value: null}
      }
    }
  }
}
// const myList = new LinkedList([1, 2, 3, 4]);
const myList = new LinkedList([{ val: 1 }, { val: 2 }, { val: 3 }]);

for (let item of myList) {
  console.log(item); // { val: 1 }, { val: 2 }, { val: 3 }
}
