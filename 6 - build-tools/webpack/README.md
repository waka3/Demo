### 手写Webpack

- babel全家桶安装
  - @babel/parser: 把代码转化成AST语法树
  - @babel/traverse: 对代码内引入的东西进行解析
  - @babel/core: 解析成ES5
  - @babel/preset-env

- 获取模块信息 **getModulleInfo**
  - 读取文件 **fs**
  - 转换语法树AST **babel/parser**
  - 收集模块依赖: AST 节点遍历 文件路径处理 **babel/traverse、path**
  - ES5+转ES5 **babel/core、babel/preset-env**
  ```JS
  const moduleInfo = {
      file, // 文件
      deps, // 依赖关系
      code  // 转换后的代码
    }
  ```

- 模块信息解析 **parseModules**
  - 获取依赖关系
