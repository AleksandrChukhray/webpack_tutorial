import _ from 'lodash';
import './style.css';
import Icon from './my-image.jpg';
import template from './main.hbs';

console.log('template', template({name: 'world'}));

const component = () => {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.

  let myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
};

document.body.appendChild(component());
