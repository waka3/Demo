// 第二个module.exports覆盖第一个module.exports
module.exports = function add(a, b) {
  return a + b;
}
module.exports = function multi(a, b) {
  return a * b;
}