const imageContainerEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
  addNewImages(10);
});

function addNewImages(imageNum) {
  for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement('img');
    newImgEl.src = `https://picsum.dev/300/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEl.appendChild(newImgEl);
  }
}
