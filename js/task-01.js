const categoriesElement = document.querySelector('#categories');

function categoriesCount(list) {
  return `Number of categories: ${list.children.length}`;
}

console.log(categoriesCount(categoriesElement));


function categoriesOperation(list) {
  for(const element of list.children) {
    console.log(`Category: ${element.firstElementChild.textContent}\nElements: ${element.lastElementChild.children.length}`);
  }
}

console.log(categoriesOperation(categoriesElement));