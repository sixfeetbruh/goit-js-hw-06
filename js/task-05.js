const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

inputValue.addEventListener('input', () => {
  if(inputValue.value !=='') {
    return outputValue.textContent = inputValue.value;
  }

  return outputValue.textContent = 'Anonymous';
})