function color16(){
  let r = Math.floor(Math.random() * 256).toString(16);
  let g = Math.floor(Math.random() * 256).toString(16);
  let b = Math.floor(Math.random() * 256).toString(16);
  let color = '#' + r + g + b;
  return color;
}

function colorRgb(){
  let r = Math.floor(Math.random() * 256).toString();
  let g = Math.floor(Math.random() * 256).toString();
  let b = Math.floor(Math.random() * 256).toString();
  let color = `rgb(${r},${g},${b})`;
  return color;
}

// console.log(color16())
// console.log(colorRgb())

class ColorPicker{
  constructor() {
    this.value = ''
  }
  getValue() { 
    return this.value
  }
  setValue(value) {
    this.value = value
    return this
  }
  color16(){
    let r = Math.floor(Math.random() * 256).toString(16);
    let g = Math.floor(Math.random() * 256).toString(16);
    let b = Math.floor(Math.random() * 256).toString(16);
    let color = '#' + r + g + b;
    this.value = color;
    return this;
  }
  colorRgb(){
    let r = Math.floor(Math.random() * 256).toString();
    let g = Math.floor(Math.random() * 256).toString();
    let b = Math.floor(Math.random() * 256).toString();
    let color = `rgb(${r},${g},${b})`;
    this.value = color;
    return this;
  }
}

const newColor = new ColorPicker()
console.log('1', newColor.getValue())
console.log('2', newColor.setValue('red').getValue())
console.log('3', newColor.color16().getValue())
console.log('4', newColor.colorRgb().getValue())
console.log('4', newColor.color16().colorRgb().getValue())