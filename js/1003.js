/**
 * 1. 异步执行、同步执行
 * - 同步执行：后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的
 * - 异步模式：不同于同步执行，每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行队列上的后一个任务，而是执行回调函数；
 *            后一个任务则是不等前一个任务的回调函数的执行而执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。
 *  
 * 2. 宏观任务、微观任务 
 * - JS引擎的执行是一个同步队列顺序执行，是单线程，所以会出现代码体量大的阻塞问题。由JS引擎发起的任务叫做微观任务 - 总是先于宏观任务执行；
 * - 由JS引擎所在的宿主环境（Node / 浏览器）发起的任务，叫宏观任务。 浏览器是多线程执行的。
 *   可以发起宏观任务的API（发起的顺序是从左到右）：setTimeout、setInterval、setImmediate
 */
setImmediate(() => {
  console.log(7)
}, 0)

setTimeout(() => {
  console.log(6)
}, 0)

console.log(1);

const p = new Promise((resolve, reject) => {
  console.log(2);
  resolve();
  console.log(3);
})

p.then(res => {
  console.log(5);
})

console.log(4);

// async function async1() {
//   console.log(2)
//   await async2();
//   console.log(7)
// }
// async function async2() {
//   console.log(3)
//   await async3();
//   console.log(6)
// }
// async function async3() {
//   console.log(4)
// }
// console.log(1);
// async1();
// console.log(5);