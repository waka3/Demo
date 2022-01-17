chrome.extension.onRequest.addListener( //监听扩展程序进程或内容脚本发送的请求
  function (request, sender, sendResponse) {
    if (request.action ==  "autogeturl" ) {
      var aList = []
      var texts = document.querySelectorAll('.talk-content-container .content')[0].innerText.split('\n')
      for (let i = 0; i < texts.length; i++){
        var item = texts[i]
        var split = request.split
        if(split){
          var ctns = item.split(split)
          if (ctns.length > 1) {
            var urlH = /[A-Za-z]/gi.test(split) ? split : ''
            var title = ''
            var url = ''
            if (/[\u4E00-\u9FA5]/gi.test(ctns[0])) {
              title = ctns[0]
              url = urlH + ctns[1]
            } else {
              title = ctns[1]
              url = urlH + ctns[0]
            }
            url = url.split('https:')[0].length > 0 ? 'https:' + url.split('https:')[1] : url
            var obj = {
              title: title,
              url: url
            }
            aList.push(obj)
          }
        } else {
          
        }
      }
      exportExcel(aList)
    }
  }
);