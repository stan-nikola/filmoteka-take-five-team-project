import { Spinner } from 'spin.js';

const target = document.querySelector('.js-load-spinner');

var opts = {
  lines: 11, // The number of lines to draw
  length: 64, // The length of each line
  width: 24, // The line thickness
  radius: 67, // The radius of the inner circle
  scale: 0.35, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1.6, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-shrink', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#f50000', // CSS color or array of colors
  fadeColor: ' #FF6B08', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'fixed', // Element positioning
};
const spinner = new Spinner(opts);

export function loadStart() {
  spinner.spin(target);
}

export function loadStop() {
  spinner.stop();
}
