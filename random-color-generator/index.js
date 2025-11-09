const containerEl = document.querySelector('.container');

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement('div');
  colorContainerEl.classList.add('color-container');
  const newColorCode = randomColor();
  colorContainerEl.style.backgroundColor = `#${newColorCode}`;
  colorContainerEl.innerText = `#${newColorCode}`;
  containerEl.appendChild(colorContainerEl);
}

function randomColor() {
  const chars = '0123456789abcdef';
  let color = '';
  for (let ch = 0; ch < 6; ch++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    color += chars.split('')[randomNumber];
  }
  return color;
}
