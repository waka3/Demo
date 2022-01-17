(function () {
  document.getElementById('autogeturl-btn').onclick = function () {
    const split = document.getElementById('autogeturl-split').value
    chrome.tabs.getSelected( null ,  function  (tab) { //获取当前tab
      //向tab发送请求
      chrome.tabs.sendRequest(tab.id, { action:  "autogeturl", split: split })
    })
  }
})();