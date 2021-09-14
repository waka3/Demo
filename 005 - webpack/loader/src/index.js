import _ from 'lodash'
import './style.css'
import Icon from './cat.jpg'
import data from './data.xml'

function component() {
  let div = document.createElement('div');
  div.innerHTML = _.join(['hello', 'webpack'], ' -  ');
  div.classList.add('hello');
  let icon = new Image();
  icon.src = Icon;
  div.appendChild(icon);
  console.log(data);
  return div;
}

document.body.appendChild(component());