/**
 * new 新建对象有个__proto__属性，指向构造函数的原型对象fun1.prototype
 * 通过 . 给对象添加的属性会被添加到 constructor 内
 * prototype：指向构造函数的原型对象
 * __proto__：指向原型对象
 */

function fun1() {
  this.test = 'fun1_test'
  return 1
}
const fun1New = new fun1()
console.log(fun1New.__proto__ === fun1.prototype) // true
console.log(fun1.test) // undefined
console.log(fun1New.test )// fun1_test

function fun2() { return 2 }
fun2.test = 'fun2_test'
console.log(fun2.prototype) // constructor 内会有一个 test 属性
console.log(fun2.test) // fun2_test

function fun3() { }
fun3.prototype.test = "fun3_test"
console.log(fun3.prototype) // 属性内会有一个 test 属性
console.log(fun3.prototype.test) // fun3_test
console.log(fun3.test) // undefined