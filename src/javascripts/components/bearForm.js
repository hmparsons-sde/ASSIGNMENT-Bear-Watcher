import bears from '../helpers/data/bearData';
import buildABear from '../helpers/river';

const bearFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bear-name').value;
  const image = document.querySelector('#bear-url').value;
  const catches = [''];
  const misses = [''];

  const obj = {
    name,
    image,
    catches,
    misses,
  };
  bears.push(obj);
  buildABear(bears);
};

const trackedEvents = (e) => {
  const button = e.target.className;
  const index = e.target.id;
  const time = new Date().toLocaleString();
  if (e.target.type === 'button' && button.includes('missed')) {
    bears[index].misses.unshift(time);
    buildABear(bears);
  } else if (e.target.type === 'button' && button.includes('caught')) {
    bears[index].catches.unshift(time);
    buildABear(bears);
  }
};

const handleButtonClick = () => {
  document.querySelector('#bear-form').addEventListener('submit', bearFormInfo);
  document.querySelector('#bear-cards').addEventListener('click', trackedEvents);
};

export default handleButtonClick;
