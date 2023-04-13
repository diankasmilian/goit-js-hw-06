function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const divBox = document.querySelector('#boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

btnCreate.addEventListener('click', () => {
  const amount = Number(inputEl.value);
  createBoxes(amount);
});


function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
const divEl = document.createElement('div');
divEl.style.width = `${size}px`;
divEl.style.height = `${size}px`;
divEl.style.backgroundColor = getRandomHexColor();
fragment.append(divEl);
size += 10;
  };
  return divBox.append(fragment);
}

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  divBox.innerHTML = '';
}