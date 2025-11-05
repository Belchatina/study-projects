const imageContainerEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');

addNewImage(5);

btnEl.addEventListener('click', () => {
  addNewImage(5);
});

function createPlaceholder() {
  LOAD_URL =
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXk5emxvd2hscWF3NTRndjg0NjY5YzFyMnhwcHU5Z3BoY2FsYmpycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HMSLfCl5BsXoQ/giphy.gif';
  const placeholderImg = document.createElement('img');
  placeholderImg.src = LOAD_URL;
  placeholderImg.style.objectFit = 'cover';
  return placeholderImg;
}

function addNewImage(imageNum) {
  for (let index = 0; index < imageNum; index++) {
    const placeholderImg = createPlaceholder();
    imageContainerEl.appendChild(placeholderImg);
    const newImgEl = document.createElement('img');
    newImgEl.src = `https://picsum.dev/300/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    newImgEl.addEventListener('load', () => {
      imageContainerEl.replaceChild(newImgEl, placeholderImg);
    });
  }
}
