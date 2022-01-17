(function () {
  document.getElementById('autogeturl-btn').onclick = function () {
    console.log('点击按钮')
    chrome.tabs.getSelected( null ,  function  (tab) { //获取当前tab
      //向tab发送请求
      chrome.tabs.sendRequest(tab.id, { action:  "autogeturl" })
    })
  }
})();