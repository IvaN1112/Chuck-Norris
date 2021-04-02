import get from './utils/getElement.js';
const URL = 'https://api.chucknorris.io/jokes/random';
const content = get('.content');
const img = get('.container-img');
const btn = get('.btn');

btn.addEventListener('click', async () => {
  const request = await fetch(URL);
  const data = await request.json();
  loadData(data);
});

function loadData(data) {
  img.classList.add('shake-img');
  const shakePeriod = Math.random() * 1000;
  const { value: joke } = data;
  content.innerText = joke;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, shakePeriod);
}
