const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.querySelector('.total-counter');
const remainingCounterEl = document.querySelector('.remaining-counter');

textareaEl.addEventListener('input', () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  const length = textareaEl.value.length;
  const maxlength = Number(textareaEl.getAttribute('maxlength'));
  totalCounterEl.innerText = length;
  remainingCounterEl.innerText = maxlength - textareaEl.value.length;
}
