const containerEl = document.querySelector('.container');

const careers = [
  'vet',
  'zookeeper',
  'groomer',
  'dog walker',
  'pet sitter',
  'animal rescuer',
  'zoologist',
];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
  <h1>I am ${
    'aoiue'.includes(careers[careerIndex].slice(0, 1)) ? 'an' : 'a'
  } ${careers[careerIndex].slice(0, characterIndex)}</h1>
`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
