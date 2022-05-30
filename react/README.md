### react 学习相关

## Hooks
- [五个大型项目实践总结，解密React Hooks最佳实践](https://segmentfault.com/a/1190000021133222)
- [当我们在用Hooks时，我们到底在用什么？(描述了部分原理)](https://github.com/closertb/closertb.github.io/issues/57)
- [源码解析React Hook构建过程：没有设计就是最好的设计](https://mp.weixin.qq.com/s/968ukIjEhhEOeLD5SQoKaw)
- [Hooks 文档翻译](https://github.com/tcatche/tcatche.github.io/issues)

- Hooks 进阶
  - [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)
  - [使用 React Hooks 声明 setInterval](https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/)
  - [useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)
  - [React Hooks 详解](https://juejin.im/post/6844903985338400782?utm_source=gold_browser_extension)
  - [五个大型项目实践总结，解密React Hooks最佳实践](https://segmentfault.com/a/1190000021133222)
  - [无意识设计--复盘React Hook的创造过程](https://zhuanlan.zhihu.com/p/73866928)
  - [译, 深入React fiber架构及源码](https://zhuanlan.zhihu.com/p/57346388) fiberNode执行的图形说明
  - [怎么用 React Hooks 造轮子](https://zhuanlan.zhihu.com/p/50274018) hooks的应用场景

- useEffect 注意事项
  - 注意依赖
  - 可以写多个 hooks 来避免依赖过多
  - 例如获取数据这样的接口, 如果没有特殊要求, 可以写在组件外部, 或者写在 hooks 内部
  - 如果有不需要加入依赖的数据, 可以使用 useRef, useReducer 的方式来管理数据
  - 在更新或者卸载组件的时候, 记得清除副作用函数, 例如定时器, 没有完成异步请求 (可以结合 `ahooks` 中的 useRequest(cancel方法来取消请求))
- useCallback
  - 使用 useCallback 是有性能消耗的, 简单的函数就不要使用 useCallback 包装
  - 需要比较引用的场景：如 useEffect，又或者是配合React.Memo使用 ([代码参考](https://segmentfault.com/a/1190000022988054))
  - 能写到组件外部的就写到组件外部
- useRef
  - 会频繁变化的属性, 且不是强依赖关系的, 用 useRef
- useMemo
  - useMemo 可以当做 vue 里面的 computed 来用
- useLayoutEffect
  当你的 useEffect 里面的操作需要处理DOM,并且会改变页面的样式,就需要用这个,否则可能会出现出现闪屏问题
- 技巧
  - 组件的一个属性如果是 dom, 要考虑是否是 Ref|Function|Dom|Selector 等类型
  - getTargetElement 这个函数挺好用, 可以获取 Ref|Function|Dom 类型对应的dom节点
  - 参数类型. 解决状态同步问题的时候, 像 setState 的参数可能是`value`, 也可能是个 `function`. 在封装自己的组件时候也可能会用到
  - 如果要注入默认参数, 又多个地方会用到.  可以用 `createXXX({...params}) => useXXX;   useXXX()` 这种形式
  - useReducer的第一个参数 reducer 不一定要按照严格的规范来做, 可以类似 `const toggleReducer = (state, nextValue) => (typeof nextValue === 'boolean' ? nextValue : !state);`. 以此来达到类似 ref 在处理数据时候的效果
- 注意事项
  - 开启 eslint : eslint-plugin-react
  - 如果函数中出现异步更新, 例如 setTimeout, Promise. 且在短时间内会触发多次, 有可能会出现取值错误

- hooks 里如果有`异步`请求, 要确保每次每次结果的最新, 及旧的请求或者结果要被即使清除
## 源码相关

- [部分源码注释](https://github.com/xcFreedom/r-s)
- [React 源码解析](https://www.zhihu.com/tardis/sogou/art/63217182)
- [React Fiber架构的实现](https://github.com/zhangyanling77/zhangyanling77.github.io/blob/f6cc4da6997e78c0df74547c5ceb3a16106cd005/react-fiber.md)
- [由浅入深React的Fiber架构](https://github.com/careteenL/react/tree/master/packages/fiber)
- [React Fiber原理](https://juejin.cn/post/6962449722275528712)
- [手写React Fiber渲染逻辑](https://juejin.cn/post/6964943378127519781)
- [从零开始实现一个React](https://juejin.cn/post/6844903593078685709)
- [React Diff 算法](https://mp.weixin.qq.com/s/k6NYlRaJPeQ_Kn2iZGAEUA)
- [让虚拟DOM和DOM-diff不再成为你的绊脚石](https://juejin.cn/post/6844903806132568072)
  - 我们来梳理一下整个DOM-diff的过程：
    用JS对象模拟DOM（虚拟DOM）
    把此虚拟DOM转成真实DOM并插入页面中（render）
    如果有事件发生修改了虚拟DOM，比较两棵虚拟DOM树的差异，得到差异对象（diff）
    把差异对象应用到真正的DOM树上（patch）
- [build-your-own-react](https://pomb.us/build-your-own-react/)
- [简易版的 React](https://github.com/PiNengShaoNian/tiny-react)
- [React 源码解析](https://github.com/BUPTlhuanyu/ReactNote)
- [一文吃透react-hooks原理](https://juejin.cn/post/6944863057000529933)
- [React Hooks源码解析，原来这么简单～](https://juejin.cn/post/6844904080758800392)
- [「源码解析 」这一次彻底弄懂react-router路由原理](https://juejin.cn/post/6886290490640039943)
- [React 源码解析](https://react.jokcy.me/) ★★★★
- [React 技术揭秘](https://react.iamkasong.com/) ★★★★
- [图解 React 源码系列](https://github.com/7kms/react-illustration-series) ★★★★★
## React & Typescript

- [React组件设计 - 类型检查](https://github.com/qingmingsang/blog/issues/10)
- [React Hook & TypeScript](https://github.com/qingmingsang/blog/issues/4)
- [React + TypeScript 实践](https://mp.weixin.qq.com/s/Uw5FzVCopxi4uDM1VmjukA)

## React 基础

- [react api 巩固](https://mp.weixin.qq.com/s/ZY6_Y1_fJT0MCWZz5HjKog)
- React组件设计
  - [React组件设计 - 类型检查](https://github.com/qingmingsang/blog/issues/10)
  - [React组件设计 - 组件的组织](https://github.com/qingmingsang/blog/issues/11)
  - [React组件设计 - 样式的管理](https://github.com/qingmingsang/blog/issues/12)
  - [React组件设计 - 组件的思维](https://github.com/qingmingsang/blog/issues/13)
  - [React组件设计 - 状态管理](https://github.com/qingmingsang/blog/issues/14)
## 工程化

- [彻底搞懂基于 Monorepo 的 lerna 模块(从原理到实战)](https://mp.weixin.qq.com/s/eAwP5BeHKLBDhXRszahGRg)
- [不使用脚手架搭建 React 项目](https://mp.weixin.qq.com/s/IZ9PlGcOuDNdyF6JMkiuow)
- [从 0 搭建一个 React 项目](https://github.com/zhuyuanmin/react-0-1-build)
- [可能是最详细的React组件库搭建总结](https://mp.weixin.qq.com/s/Qmo5wWba7z7N1GgtGst0cA)
- [React进阶](https://juejin.cn/column/6961274930306482206)