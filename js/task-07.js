const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.value = inputEl.getAttribute('min');

inputEl.addEventListener('input', onInputRange);



function onInputRange (event) {
   
   const inputValue = event.currentTarget.value;
   textEl.style.fontSize = `${inputValue}px`;
}
