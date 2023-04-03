const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');


ingredients.forEach(ingridient => {
  
  const nameEl = document.createElement('li');
nameEl.classList.add('item');
nameEl.textContent = ingridient;

list.append(nameEl);
});

