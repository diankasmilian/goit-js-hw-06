const inputEl = document.querySelector('#validation-input');

const inputLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', inputValue);

function inputValue (event) {
   const inputValueLength = event.currentTarget.value;
   if (inputValueLength.length === inputLength) {
      inputEl.classList.remove('invalid');
      inputEl.classList.add('valid');
   } else {
      inputEl.classList.remove('valid');
      inputEl.classList.add('invalid');
   }
}