const rangeControl = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');

rangeControl.addEventListener('input', changeTextSize);

function changeTextSize(evt) {
  textToChange.style.fontSize = `${evt.currentTarget.value}px`;
}