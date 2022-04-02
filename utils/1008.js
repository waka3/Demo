/**
 * 把json数据导出成json文件
 * @param {*} data json对象
 * @param {*} filename 导出的文件名
 * @returns 
 */
function saveJSON(data, filename) {
  if (!data) {
    alert('保存的数据为空');
    return;
  }
  if (!filename)
    filename = 'json.json'
  if (typeof data === 'object') {
    data = JSON.stringify(data, undefined, 4)
  }
  var blob = new Blob([data], { type: 'text/json' }),
    e = document.createEvent('MouseEvents'),
    a = document.createElement('a')
  a.download = filename
  a.href = window.URL.createObjectURL(blob)
  a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  a.dispatchEvent(e)
}

// export {
//   saveJSON
// };

