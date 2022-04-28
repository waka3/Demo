### build.js
构建入口, 使用 rollup 构建

```js
let builds = require('./config').getAllBuilds()

// filter builds via command line arg
if (process.argv[2]) {
  const filters = process.argv[2].split(',')
  builds = builds.filter(b => {
    return filters.some(f => b.output.file.indexOf(f) > -1 || b._name.indexOf(f) > -1)
  })
} else {
  // filter out weex builds by default
  builds = builds.filter(b => {
    return b.output.file.indexOf('weex') === -1
  })
}

// 对 bulids 进行过滤获取实际环境需要使用的 builds 环境对象
```


### config.js
构建相关的参数配置
- builds 对象: 不同环境构建变量声明
  - entry: 构建入口文件路径
  - dest: 构建输出文件路径
  - format: 构建方式 cjs: [commomjs](http://wiki.commonjs.org/wiki/CommonJS)、es: [es module](https://exploringjs.com/es6/ch_modules.html)、umd: [UMD](https://github.com/umdjs/umd)
  - env: 使用环境
- genConfig: rollup 对应的配置 config 对象

> builds 声明构建对象，从文件名可看出基本都分为：runtime-only && Runtime+compiler 2种
>> [vue不同构建版本的解释](https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A)
>> 后续以 Runtime + compiler 为例阅读