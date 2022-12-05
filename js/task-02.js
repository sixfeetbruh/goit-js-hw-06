const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

function makeMarkup(ingredients) {
  return ingredients.map(ingredient => {
    const createList = document.createElement('li');
    createList.textContent = ingredient;
    createList.classList.add('item');

    return createList;
  })
};

ingredientsList.append(...makeMarkup(ingredients));