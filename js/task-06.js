const inputValid = document.querySelector('#validation-input');

inputValid.addEventListener('input', makeValid);

function makeValid() {
  return inputValid.addEventListener('blur', () => {
    if(inputValid.dataset.length != inputValid.value.length) {
      inputValid.classList.add('invalid');
    } else {
      inputValid.classList.remove('invalid');
      inputValid.classList.add('valid');
    }

    return inputValid;
  })
}