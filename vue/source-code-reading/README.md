## 源码阅读笔记

vue2.6.12 源码目录结构:
```js
  src
  ├── compiler        # 编译相关
    ├── codegen
    ├── directives
    ├── parser
  ├── core            # 核心代码
    ├── components      # 内置组件
    ├── global-api      # 全局API封装
    ├── instance        # Vue实例化
    ├── observer        # 观察者模式
    ├── util            # 工具函数
    ├── vdom            # 虚拟DOM
  ├── platforms       # 不同平台的支持
    ├── web
    ├── weex
  ├── server          # 服务端渲染
    ├── bundle-renderer
    ├── optimizing-complier
    ├── template-renderer
    ├── webpack-plugin
  ├── sfc             # .vue 文件解析
  ├── shared          # 共享代码
```

#### compiler
> 包含vue.js编译相关的代码, 编译的工作可在构建时、在运行时，（较耗性能，不推荐运行编译）
- 把 jsx 模板解析成 ast 语法树
- ast语法树优化
- 代码生成
- ...

#### core
> 核心代码

#### platforms
> vue.js 入口, 分别打包成运行再 web 和 weex 上的vue.js

#### server

#### sfc
> 将 .vue 文件解析成 JS 对象

#### shared

#### 相关链接
[flow, js代码格式控制](https://flow.org/en/docs/getting-started/)
[Weex, 是跨平台可扩展的动态化技术](https://esmeetu.gitbooks.io/weex/content/advanced/how-it-works.html)