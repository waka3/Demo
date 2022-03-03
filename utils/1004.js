/**
 * downloadIamge
 * 利用canvas.toDataURL下载非同源的图片
 * 注意：非同源的照片来源需要支持跨域, 否则会还是会触发CORS跨域(只能通过URL解决)
 * @param {*} selector 
 * @param {*} name 
 */
export function downloadIamge(selector, name) {
  const image = new Image()
  // 解决跨域 Canvas 污染问题
  image.onload = function() {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    const context = canvas.getContext('2d')
    context.drawImage(image, 0, 0, image.width, image.height)
    const url = canvas.toDataURL('image/png') // 得到图片的base64编码数据
    const a = document.createElement('a') // 生成一个a元素
    const event = new MouseEvent('click') // 创建一个单击事件
    a.download = name || '下载图片' // 设置图片名称
    a.href = url // 将生成的URL设置为a.href属性
    a.dispatchEvent(event) // 触发a的单击事件
  }
  image.setAttribute('crossOrigin', 'anonymous')
  image.src = document.querySelector(selector).src
}