/**
 * require && import
 * 一、commonJS模块语法：exports / module.exports 导出模块方法和变量;  require() 导入exports导出的模块方法
 * 二、ES模块：export / export default 导出模块方法和变量; import 导入 export 导出的模块方法
 *     1. import 输入的接口名需要与 export 暴露的接口存在一一对应的关系，用户需要知道所要加载的变量名或函数名，否则无法加载
 *     2. export default 暴露了默认名为 default 的对外接口, import 可以为 default 接口任意命名, 因此无需知道接口的具体名称
 */
const addModuleExports = require('./module.exports.js');
console.log(addModuleExports) // [Function: multi];

const addExports = require('./exports.js');
console.log(addExports) // { add: [Function: add], multi: [Function: multi] } 


 

