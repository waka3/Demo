/**
 * 时间戳/日期转换成指定格式的日期
 * @param {(Object|string|number|undefined)} time: 为空默认取当前时间
 * @param {string} format 格式化格式
 * @returns {string | null}
 */
function formatTime(time, format = "YYYY-MM-dd") {
  var date
  if (arguments.length === 0 || !time) {
    date = new Date()
  }

  if (time instanceof Date) {
    date = time
  } else {
    if (typeof time === 'number') { // 时间戳
      if (time.toString().length < 10) {
        // 错误的时间戳格式
        return new TypeError('time is error')
      }
      date = new Date(time)
      if (time.toString().length === 10) {
        date = date * 1000 // 秒转毫秒
      }
    } else if (typeof time === 'string') {
      if (time.length < 10) {
        return new TypeError('time is error')
      }
      if (/^[0-9]+$/.test(time)) { // 处理时间戳字符串
        date = new Date(parseInt(time)) // parseInt() 函数可解析一个字符串，并返回一个整数
        if (time.length === 10) {
          date = date * 1000 // 秒转毫秒
        }
      } else {
        // new Date('2020-05-21 12:00:00') safari execute output Invalid date
        // new Date('2020-05-21T12:00:00+08:00') standard format

        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        date = time.replace(new RegExp(/-/gm), '/')
      }
      date = new Date(date)
    }
  }

  var formatList = {
    'Y+': date.getFullYear(),    // 年
    'y+': date.getFullYear(),    // 年
    'M+': date.getMonth() + 1,   // 月
    'D+': date.getDate(),        // 日  
    'd+': date.getDate(),        // 日  
    'H+': date.getHours(),       // 时
    'h+': date.getHours(),       // 时
    'm+': date.getMinutes(),     // 分
    's+': date.getSeconds(),     // 秒
    'S+': date.getMilliseconds(),// 毫秒
    'w': date.getDay(),          // 周
    'W': date.getDay()           // 星期
  }

  for (var key in formatList) {
    if (new RegExp("(" + key + ")").test(format)) {
      if (key === 'W') {
        format = format.replace(RegExp.$1, '星期' + ['日', '一', '二', '三', '四', '五', '六'][formatList[key]])
      } else if (key === 'w') {
        format = format.replace(RegExp.$1, '周' + ['日', '一', '二', '三', '四', '五', '六'][formatList[key]])
      } else {
        format = format.replace(RegExp.$1, formatList[key].toString().padStart(RegExp.$1.length, '0'))
      }
    }
  }

  return format
}

module.exports = {
  formatTime
}