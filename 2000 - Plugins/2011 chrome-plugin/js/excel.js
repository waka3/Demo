function openDownloadDialog(url, saveName) {
  if (typeof url == 'object' && url instanceof Blob) {
    url = URL.createObjectURL(url); // 创建blob地址
  }
  var aLink = document.createElement('a');
  aLink.href = url;
  aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
  var event;
  if (window.MouseEvent) {
    event = new MouseEvent('click');
  } else {
    event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  }
  aLink.dispatchEvent(event);
}

// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
function sheet2blob(sheet, sheetName) {
  sheetName = sheetName || 'sheet1';
  var workbook = {
    SheetNames: [sheetName],
    Sheets: {}
  };
  workbook.Sheets[sheetName] = sheet;
  // 生成excel的配置项
  var wopts = {
    bookType: 'xlsx', // 要生成的文件类型
    bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    type: 'binary'
  };
  var wbout = XLSX.write(workbook, wopts);
  var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
  // 字符串转ArrayBuffer
  function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }
  return blob;
}

function exportExcel(aList) {
  var excelItems = [];
  for (let i = 0; i < aList.length; i++) {
    excelItems.push({
      "标题": aList[i].title,
      "链接": aList[i].url,
    }); //属性
  }
  var sheet = XLSX.utils.json_to_sheet(excelItems);
  for (var i in sheet) {
    if (i.indexOf('A') !== -1) {
      sheet[i].l = { Target: sheet['B' + i.split('A')[1]].v };
      sheet[i].s = { font: {color: {rgb: '' }, underline: true } };
    }
    // if (i.indexOf('B') !== -1) {
    //   sheet[i].l = { Target: sheet[i].v, Tooltip: sheet['A' + i.split('B')[1]].v };
    // }
  }
  sheet['!cols'] = [{ width: 60 }, { width: 0 }];
  openDownloadDialog(sheet2blob(sheet), `导出合集.xlsx`);
}