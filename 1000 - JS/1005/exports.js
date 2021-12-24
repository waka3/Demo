// 文件顶层默认执行了 exports = module.exports
exports.add = function add(a, b) {
  return a + b;
}
exports.multi = function multi(a, b) {
  return a * b;
}

// // 文件顶层默认执行了 module.exports = exports 最后的 module.export 被重新赋值
// module.exports = function test() {  }
