const nodeList = document.querySelectorAll('.table-wrap')[8].querySelectorAll('tbody tr')

let list = ''

Array.prototype.forEach.call(nodeList, (item) => {
  const url = item.querySelectorAll('td')[1].innerText;
  const notes = item.querySelectorAll('td')[2].innerText
  const funNames = url.split('/')
  const funName = funNames[funNames.length - 2] + funNames[funNames.length - 1][0].toUpperCase() + funNames[funNames.length - 1].substr(1)
  list += apiToFuntion(url, funName, notes) + '\n'
})

saveJSON(list)

function apiToFuntion(url, funName, notes) {
  const fullCode = `
  // ${notes}
  export function ${funName}(data) {
    return request({
      url: '${url}',
      method: 'POST',
      data
    })
  }`
  return fullCode
}

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