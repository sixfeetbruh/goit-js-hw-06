const formToLog = document.querySelector('.login-form');

formToLog.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const { email, password } = formToLog.elements;

  if ((email.value && password.value) === '') {
    alert('You must put all your information');
  } else { 
      const result = {
      email: email.value,
      password: password.value,
    }

    console.log(result);
    formToLog.reset();
  }
})