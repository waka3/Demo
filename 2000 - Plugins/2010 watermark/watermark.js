
const domSymbol = Symbol('watermark-dom');

let func = {};
const id = domSymbol.toString();

// 清除水印
function clearWatermark(parentDom) {
  const domId = document.getElementById(id);
  if (domId) {
    parentDom && parentDom.removeChild(domId);
  }
  window.removeEventListener('resize', func);
};

// 创建水印
const createWatermark = (parentDom, str) => {
  clearWatermark();

  const can = document.createElement('canvas');
  can.width = 300;
  can.height = 240;

  const cans = can.getContext('2d');
  if (cans) {
    cans.rotate((-20 * Math.PI) / 120);
    cans.font = '15px Vedana';
    cans.fillStyle = 'rgba(0, 0, 0, 0.15)';
    cans.textAlign = 'left';
    cans.textBaseline = 'middle';
    cans.fillText(str, can.width / 20, can.height);
  }

  const div = document.createElement('div');
  div.id = id;
  div.style.pointerEvents = 'none';
  div.style.top = '0px';
  div.style.left = '0px';
  div.style.position = 'absolute';
  div.style.zIndex = '100000';
  div.style.width = document.documentElement.clientWidth + 'px';
  div.style.height = document.documentElement.clientHeight + 'px';
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat';
  parentDom && parentDom.appendChild(div);
  return id;
};

function setWatermark(parentDom, str) {
  const instance = document.getElementById(id);
  if (!instance) {
    createWatermark(parentDom, str);
  }
  func = () => {
    createWatermark(parentDom, str);
  };
  window.addEventListener('resize', func);
}