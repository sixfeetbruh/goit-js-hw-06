const value = document.querySelector('#value')
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

console.dir(counterValue);

buttonDecrement.addEventListener('click', clickOnDecrement);

function clickOnDecrement() {
  counterValue -= 1;

  console.log(value.textContent = counterValue);
}

buttonIncrement.addEventListener('click', clickOnIncrement);

function clickOnIncrement() {
  counterValue += 1;

  console.log(value.textContent = counterValue);
}