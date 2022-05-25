# 面试题总结

## HTML && CSS

### HTML基础

### CSS基础
1. flex相关题目, 计算red和blue的实际宽度
```HTML
<style>
  *{padding: 0; margin: 0;}
  .container{
    display: flex;
    width: 700px;
    height: 300px;
  }
  .red{
    flex: 2 2 200px;
    background: red;
  }
  .blue{
    flex: 1 1 300px;
    background: blue;
  }
</style>

<div class="container">
  <div class="red"></div> 
  <div class="blue"></div>
</div>
<!-- 计算结果：red: 333.34px blue: 366.67px -->
<!-- 计算公式 -->
<!-- 700 - 200 - 300 剩余200 做撑开计算，red的宽度是：200 * 2/3 + 200 = 333.34px  blue宽度是：200 * 1/3 + 300 = 366.67px -->
```
> flex: flex-grow flex-shrink flex-basis
> flex: 1 1 auto  第一个数值代表子元素的撑开占比，第二个数值代表子元素的缩放占比，第三个值代表元素的宽度
> 子元素的宽度：累加和超过父元素宽度时按缩放比例（flex-shrink）计算，累加和小于父元素宽度时按按缩放比例（flex-grow）计算
> flex-basis
>> - auto: 判断是否存在显示设置的宽度，存在用设置的，不存在用自身宽度
>> - 0: 设置为0当前元素宽度不加入剩余宽度计算
>> - 数值：子元素参与计算的宽度

2. 不修改现有代码如何让图片的宽度变成300px
```html
<img src="xx.jpg" style="width: 500px !important">
```
> transform: scale(0.6)

## JavaScript

### 语法入门
1. JS的数据类型有哪些：
> 基本类型：string, number, boolean, undefined, null
> 引用类型：object, Symbol(es6新增)

2. 简述var, let 和 const三者的区别
> 作用域：var函数作用域，let,const块级作用域；
> 声明差异：var可不声明直接使用，可声明不初始化，可重复声明； let,const不可重复声明，const声明无初始化报错
> 作用范围：var声明的变量会添加到全局作用域，在浏览器中可用window.x范围，let和const声明的变量属于块作用域script对象属性，不可用window.x访问到
> 版本：var为js最初的变量声明，let和const是es6的新增属性

3. 简单描述对var变量提升的理解
> 变量提升是指以var声明的变量和函数声明，在Javascript中执行上下文 （创建和执行阶段）变量可以在声明之前进行初始化和使用，
> 函数和变量相比会被优先提升，这意味着函数会被提升到更靠前的位置），但是变量在声明前使用的话获取的值为undefinded

4. 对js对象的了解
> js对象分为内置对象、宿主对象和自定义对象:
> - 内部对象：JS规则定义的如：Array, Number, String, Date, RegExp等, 其中Global（全局对象）和Math对象在不需要实例化可以直接访问又被成为”内置对象“
> - 宿主对象: JS运行环境即宿主如浏览器提供的对象，如window, document。 浏览器将内置对象的Global作为window对象的一部分实现了，因此可以用window.x访问到js的全局对象
> - 自定义对象：开发者开发过程中自定义的对象

5. forEach和Map的区别？
> forEach循环没有返回值,map会返回一个同等长度的新数组

6. 如何在forEach和Map内做阻塞？举例说明如何实现在Map内循环调用api并需要用到上一次的循环执行结果。
```js
const array = ['a', 'b', 'c']
let prevValue = '';
array.forEach(async (element) => {
  console.log('循环开始,', element)
  prevValue = await new Promise((reslove, reject) => {
    console.log('函数内,', element, prevValue)
    // 执行迭代, 未发生阻塞，队列执行的prevValue取到的都是入参时的初始值
    reslove(prevValue + '_' + element + 'Name')
  })
  console.log('结束,', prevValue)
});
console.log('——————')
/**
 * 循环开始,a 
 * 函数内,a
 * 循环开始,b 
 * 函数内,b
 * 循环开始,c 
 * 函数内,c 
 * ——————
 * 结束,_aName 
 * 结束,_bName 
 * 结束,_cName
 */
// 按事件循环的机制的并没有await并不会阻塞后续循环的进行，
// 每一次迭代的await后的内容会压栈到宏观任务的微观任务事件队列的尾部，
// 等当前词法作用域的执行上下文执行完成并释放执行空间后await事件会按顺序执行

// 可利用setTimeout开一个新的线程阻塞执行，可以在循环的下一次用到上一次的返回值
array.forEach(async element => {
  console.log('循环开始,', element)
  prevValue = await new Promise((reslove, reject)=> {
    console.log('函数内,', element, prevValue)
    setTimeout(()=> {
      console.log('setTimeout内,', element, prevValue)
      // setTimeout每个都属于独立的线程, 也是队列执行，但是prevValue拿到的值是上一次执行完成的结果。
      reslove(prevValue + '_' + element + 'Name')
    }, 0)
  })
  console.log('结束,', prevValue)
});
console.log('——————')
/**
 * 上述执行顺序是：
 * 循环开始,a 
 * 函数内,a 
 * 循环开始,b 
 * 函数内,b 
 * 循环开始,c 
 * 函数内,c 
 * —————— 
 * setTimeout内,a,
 * 结束,a,_aName
 * setTimeout内,b,__aName
 * 结束,b,__aName_bName
 * setTimeout内,c,__aName_bName
 * 结束,c,__aName_bName_cName
 */

array.forEach(element => {
  console.log('循环开始,', element)
  setTimeout(() => {
    console.log('setTimeout内,', element, prevValue)
    prevValue += '_' + element + 'Name'
  }, 0)
  console.log('结束,', prevValue)
});
/**
 * 上述执行顺序是：
 * 循环开始,a 
 * 结束,a 
 * 循环开始,b 
 * 结束,b 
 * 循环开始,c 
 * 结束,c
 * —————— 
 * setTimeout内,a,
 * setTimeout内,b,__aName
 * setTimeout内,c,__aName_bName
 */
```

7. 介绍下js的存储模式： LocalStorage,sessionStorage和cookie

8. localStorage、sessionStorage 和 Cookie 区别及用法：
> - localStorage: 5M
>   - localStorage 的生命周期是永久的
>   - 关闭页面或浏览器之后 localStorage 中的数据也不会消失。
>   - localStorage 除非主动删除数据，否则数据永远不会消失，因为数据存储在C盘下：C:\Users\a4209\AppData\Local\Google\Chrome\User Data\Default\Local Storage\leveldb\xxx.log下
> - sessionStorage:（会话的生命周期是针对浏览器的 tab 页而言的） 5M
>   - sessionStorage 的生命周期是仅在当前会话下有效。
>   - sessionStorage 引入了一个“浏览器窗口”的概念，sessionStorage 是在同源的窗口中始终存在的数据。
>   - 只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。
>   - 但是 sessionStorage 在关闭了浏览器窗口后就会被销毁。
>   - 同时独立的打开同一个窗口同一个页面，sessionStorage 也是不一样的
> - cookie: 
>   - cookie生命期在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。未设置cookie过期时间默认情况下，在浏览器关闭时会删除cookie
>   - 存放数据大小为4K左右, 有个数限制，一般不能超过20个（各浏览器不同），chrome和safari对每个域下的cookie的数量限制没有硬性规定
>   - 缺点是不能储存大数据且不易读取
>   - 在http请求中，会在浏览器和服务器之间来回传递

9. 

### JS设计模式

### JS语法进阶
#### 作用域 闭包
1. 什么是闭包？
> 一个函数和对其周围状态的引用捆绑在一起，这样的组合就是闭包（closure）。闭包让你可以在一个内层函数中访问到其外层函数的作用域。

2. 闭包的典型使用场景有哪些？有什么优缺点
> 常用场景：
>> 1. var声明的for循环迭代内部的变量值保存(模仿块级作用域)
>> 2. 防抖节流
> 优点：
>> 1. 避免变量污染全局;
>> 2. 把变量存到独立的作用域，作为私有成员存在;
>> 3. 可以从内部函数访问外部函数的作用域中的变量，且访问到的变量长期驻扎在内存中，可供之后使用。
> 缺点：
>> 1. 对内存消耗有负面影响，因内部函数保存了对外部变量的引用，导致无法被垃圾回收，增大内存使用量，所以使用不当会导致内存泄漏；

3. js的作用域有哪些？作用域链是什么？
> 函数作用域、全局作用域、es6新增块级作用域。 （词法作用域：在声明时就决定的作用域范围）
> “作用域链”是指js引擎从当前作用域开始至下而上逐层查找变量的过程，如果到了全局作用域还未查找到变量，则会在全局范围内内隐式声明该变量。自执行函数/块级作用域可以封闭作用域。

#### this 原型链
#### promise
#### 函数和递归


## vue2.0相关
### 基础
1. 简要描述下vue生命周期
> beforeCreate：实例初始化前的调用
> created：数据侦听、计算属性、方法、事件/侦听器的回调函数等已配置完毕，实例初始化完成。
> beforeMount：相关的 render 函数首次被调用，挂载开始之前。
> mounted: 实例挂载完成，但不保证子组件实例也挂载完毕
>> 父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted -> 
>> 父 beforeDestory  -> 子 beforeDestory -> 子 destoryed ->  父 destoryed

...

2. created和mounted的区别
> 
>

3. nextTick是干嘛的？
4. 在created内调用nextTick可以获取到完整dom吗?
5. 简单描述一下单页面应用，单页面应用如何实现页面跳转的？
6. 

### 进阶
1. 简要描述响应式原理？
2. 如何实现v-model
