import get from './utils/getElement.js';
const URL = 'https://api.chucknorris.io/jokes/random';
const content = get('.content');
const img = get('.container-img');
const btn = get('.btn');

btn.addEventListener('click', () => {
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return;
    if (xhr.readyState === 4 && xhr.status === 200) {
      img.classList.add('shake-img');
      const shakePeriod = Math.random() * 1000;
      const { value: joke } = JSON.parse(xhr.responseText);
      content.innerText = joke;
      setTimeout(() => {
        img.classList.remove('shake-img');
      }, shakePeriod);
    }
  };
}
