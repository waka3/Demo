chrome.extension.onRequest.addListener( //监听扩展程序进程或内容脚本发送的请求
  function (request, sender, sendResponse) {
    if (request.action ==  "autogeturl" ) {
      var aList = []
      var texts = document.querySelectorAll('.talk-content-container .content')[0].innerText.split('\n')
      for (let i = 0; i < texts.length; i++){
        var item = texts[i]
        var ctns = item.split('https://t.zsxq.com')
        if (ctns.length > 1) {
          var obj = {
            title: ctns[0],
            url: 'https://t.zsxq.com' + ctns[1]
          }
          aList.push(obj)
        }
      }
      exportExcel(aList)
    }
  }
);