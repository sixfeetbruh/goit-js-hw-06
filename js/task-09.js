function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorText = document.querySelector('.color');
const btnToChangeColor = document.querySelector('.change-color');

btnToChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
})