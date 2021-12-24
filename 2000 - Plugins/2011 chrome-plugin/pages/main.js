(function () {
    document.getElementById('autogeturl-btn').onclick = function() {
        var url = document.getElementById('autogeturl-id').value
        if (url === '') {
            alert('请输入获取链接的地址')
        }
        chrome.tabs.getSelected( null ,  function  (tab) { //获取当前tab
            //向tab发送请求
            chrome.tabs.sendRequest(tab.id, { action:  "autogeturl", url: url  })
        })
    }
})();