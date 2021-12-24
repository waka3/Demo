import { Message } from 'element-ui'

/**
 * 根据后台接口文件流下载
 * @param {*} data
 * @param {*} filename
 * @param {*} mime https://www.cnblogs.com/xiaohi/p/6550133.html
 * @param {*} bom
 */
export const downloadByData = (data, filename, mime, bom) => {
  const blobData = typeof bom !== 'undefined' ? [bom, data] : [data]
  const blob = new Blob(blobData, { type: mime || 'application/octet-stream' })
  console.log(blob)
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    window.navigator.msSaveBlob(blob, filename)
  } else {
    const blobURL = window.URL.createObjectURL(blob)
    const tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = blobURL
    tempLink.setAttribute('download', filename)
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank')
    }
    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
    window.URL.revokeObjectURL(blobURL)
  }
}

/**
 * 根据后台接口对文件流和json进行判断后并下载
 * @param {*} data blob数据
 */
export const dealByBlobData = data => {
  return new Promise((reslove, reject) => {
    const reader = new FileReader()
    reader.readAsText(data, 'utf-8')
    let result = ''
    reader.onload = () => {
      try {
        result = JSON.parse(reader.result)
        Message({
          message: result.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
        return reject(false)
      } catch (err) {
        return reslove(data)
      }
    }
  })
}
