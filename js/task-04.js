let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');

const increment = document.querySelector('button[data-action="increment"]');

const value = document.querySelector('#value');

const addition = () => {
  counterValue += 1;
  return value.textContent = counterValue;
};

const subtraction = () => {
  counterValue -= 1;
  return value.textContent = counterValue;
};

decrement.addEventListener('click', subtraction);
increment.addEventListener('click', addition);







