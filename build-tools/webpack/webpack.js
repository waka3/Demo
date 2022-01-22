const fs = require('fs') // 文件解析
const path = require('path') // 路径解析
const parser = require('@babel/parser') // 把代码转化成AST语法树
const babel = require('@babel/core')
const traverse = require('@babel/traverse').default

/**
 * 获取单个文件模块信息
 */

function getModulleInfo(file) {
  // 文件读取
  const body = fs.readFileSync(file, 'utf-8')
  // 抽象语法树转换
  const ast = parser.parse(body, {
    sourceType: 'module' // 解析类型
  })

  // 收集模块依赖
  const deps = {}
  traverse(ast, {
    // 遍历
    // 导入声明
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file); // 获得文件目录名
      const absPath = './' + path.join(dirname, node.source.value) // 路径拼接
      deps[node.source.value] = absPath;
    },
  })

  // ES6转ES5  transformFromAst将ast对象结构转换成es5代码
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })

  const moduleInfo = {
    file, // 文件
    deps, // 依赖关系
    code  // 转换后的代码
  }

  return moduleInfo;
}


/**
 * 文件模块解析
 * @param {*} file
 */
function parseModules(file) {
  const entry = getModulleInfo(file);
  const temp = [entry]
  const depsGraph = {} // 依赖图
  getDeps(temp, entry)
  temp.forEach(info => {
    depsGraph[info.file] = {
      deps: info.deps,
      code: info.code
    }
  })
  return depsGraph
}

/**
 * 获取依赖
 * 遍历循环所有的依赖关系，直到子模块不存在依赖
 * 可以取出所以的依赖文件和代码
 */
function getDeps(temp, { deps }) {
  // 当前文件的依赖文件
  Object.keys(deps).forEach(item => {
    const child = getModulleInfo(deps[item])
    temp.push(child);
    // 子模块继续递归获取依赖
    getDeps(temp, child);
  })
}

const ctn = parseModules('./src/index.js')
console.log(ctn)