const inputValid = document.querySelector('#validation-input');

inputValid.addEventListener('blur', makeValid);

function makeValid(e) {
    if(Number(e.target.dataset.length) !== e.target.value.length) {
      e.target.classList.add('invalid');
      e.target.classList.remove('valid');
    } else {
      e.target.classList.remove('invalid');
      e.target.classList.add('valid');
    }
  }