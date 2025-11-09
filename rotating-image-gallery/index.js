const imageContainerEl = document.querySelector('.image-container');
const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');

let rotate = 0;

let setTimer;

function rotateGallery(direction) {
  rotate += direction * 45;
  clearTimeout(setTimer);
  updateGallery();
}

prevEl.addEventListener('click', () => {
  rotateGallery(1);
});

nextEl.addEventListener('click', () => {
  rotateGallery(-1);
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${rotate}deg)`;
  setTimer = setTimeout(() => {
    rotateGallery(-1);
  }, 2000);
}

updateGallery();
