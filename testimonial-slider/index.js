const testimonial = [
  {
    name: 'Mr. Whiskers, 3 years old, Nap Specialist',
    photoURL:
      'https://img.freepik.com/free-photo/closeup-vertical-shot-cute-european-shorthair-cat_181624-34587.jpg?ga=GA1.1.424002353.1762581001&semt=ais_hybrid&w=740&q=80',
    text: 'I used to sleep only 16 hours a day. After discovering CozyCatBeds, I’m up to 18. Truly life-changing. Highly recommended for busy cats who value quality rest.',
  },
  {
    name: 'Bella, 2 years old, Professional Dust Hunter',
    photoURL:
      'https://img.freepik.com/premium-photo/portrait-cat-box_1048944-13264021.jpg?ga=GA1.1.424002353.1762581001&semt=ais_hybrid&w=740&q=80',
    text: 'At first, I hissed. Then I realized — this isn’t just a box. It’s a BoxTech box with an interface! I live here now.',
  },
  {
    name: 'Barsik, 5 years old, Senior Refrigerator Inspector',
    photoURL:
      'https://img.freepik.com/free-photo/cute-cat-sitting-chair_23-2148882589.jpg?ga=GA1.1.424002353.1762581001&semt=ais_hybrid&w=740&q=80',
    text: 'Finally, someone who responds to my stare as fast as humans do to notifications. Five stars. Meow.',
  },
  {
    name: 'Snowball, 1.5 years old, Junior Claw Engineer',
    photoURL:
      'https://img.freepik.com/free-photo/close-up-cute-cat-indoors_23-2148882585.jpg?ga=GA1.1.424002353.1762581001&semt=ais_hybrid&w=740&q=80',
    text: 'No bugs, no lag — everything runs smooth, like my fur after morning grooming. Even I, a cat, figured it out without reading the manual.',
  },
  {
    name: 'Sir Leopold, 7 years old, Co-Founder of the Couch',
    photoURL:
      'https://img.freepik.com/free-photo/british-shorthair-kitty-with-monochrome-wall-her_23-2148955110.jpg?ga=GA1.1.424002353.1762581001&semt=ais_hybrid&w=740&q=80',
    text: 'Started using it after accidentally stepping on the keyboard. Now I have my own page and thousands of likes from lady cats. Zero regrets, 100% purrs.',
  },
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEL = document.querySelector('.username');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let idx = 0;
let interval;

function updateTestimonial() {
  const { name, photoURL, text } = testimonial[idx];
  imgEl.src = photoURL;
  textEl.innerText = text;
  usernameEL.innerText = name;
}

function startAutoUpdate() {
  stopAutoUpdate();

  interval = setInterval(() => {
    idx++;
    if (idx >= testimonial.length) idx = 0;
    updateTestimonial();
  }, 2000);
}

function stopAutoUpdate() {
  if (interval) clearInterval(interval);
}

prevButton.addEventListener('click', () => {
  idx--;
  if (idx < 0) idx = testimonial.length - 1;
  updateTestimonial();
  startAutoUpdate();
});

nextButton.addEventListener('click', () => {
  idx++;
  if (idx >= testimonial.length) idx = 0;
  updateTestimonial();
  startAutoUpdate();
});

updateTestimonial();
startAutoUpdate();
