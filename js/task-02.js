const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const container = [];


ingredients.forEach(ingridient => {
  
  const nameEl = document.createElement('li');
nameEl.classList.add('item');
nameEl.textContent = ingridient;
container.push(nameEl);

});

list.append(...container);