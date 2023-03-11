const baseSize = 37.5;

function setRem() {
  const scale = document.documentElement.clientWidth / 750;
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 1) + 'px';
}

setRem();
window.onresize = function () {
  setRem();
};

export default baseSize;
