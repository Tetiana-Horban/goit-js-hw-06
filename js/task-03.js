const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');

const makeImage = ({ url, alt }) => {
  return `<li><img src=${url} alt=${alt} width="400px" heigth="400px"<li>`;
};
const imagesInList = images.reduce((acc, item) => acc + makeImage(item), '');

listEl.insertAdjacentHTML('afterbegin', imagesInList);
listEl.setAttribute('style', 'display:flex; list-style:none; justify-content: space-between;');
