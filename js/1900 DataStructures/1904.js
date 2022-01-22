/**
 * {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
 */


function loop(data, pid = null) {
  const result = []
  let children;
  for (let i = 0; i < data.length; i++) {
    if (data[i].pid === pid) {
      children = loop(data, data[i].id)
      data[i].children = children
      result.push(data[i])
    }
  }
  return result
}

const arr = [
  { id: 1, name: '部门1', pid: null },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]

console.log(JSON.stringify(loop(arr)))