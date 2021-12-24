// import test from './test.export.js';
// console.log(test); 
// import test from './test.js';
// ^^^^
// SyntaxError: The requested module './export.js' does not provide an export named 'default'
// or SyntaxError: Cannot use import statement outside a module

// index.js
import * as test from './test.export.js';
console.log(test);
// [Module] { add: [Function: add], multi: [Function: multi] }
// index.js
import { add } from './test.export.js';
console.log(add);
// [Function: add]


// test.js
export function add(a, b) {
  return a + b;
}
export function multi(a, b) {
  return a * b;
}
export default {
  add,
  multi
}
// index.js
import test from './test.js';
console.log(test);
// { add: [Function: add], multi: [Function: multi] }
// index.js
import * as test from './test.js';
console.log(test);
// [Module] {
//   add: [Function: add],
//   default: { add: [Function: add], multi: [Function: multi] },
//   multi: [Function: multi]
// }
// index.js
import { add } from './test.js';
console.log(add);
// [Function: add]