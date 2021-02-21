import bears from '../helpers/data/bearData';
import buildABear from '../helpers/river';

const bearFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bear-name').value;
  const imageUrl = document.querySelector('#bear-url').value;
  const bearId = bears.map((bear) => bear.id).sort((a, b) => a - b);
  const id = bearId.length ? bearId[bearId.length - 1] + 1 : 1;
  const obj = {
    name,
    imageUrl,
    id,
  };
  bears.push(obj);
  buildABear(bears);
  document.querySelector('form').reset();
};

const catchAFish = () => {
  const cards = document.querySelectorAll('.card');
  console.warn(typeof cards);
  cards.forEach((item) => item.addEventListener('click', (e) => {
    if (e.target.type === 'button' && e.target.id.includes('increase')) {
      const bearId = e.target.id.split('-')[1];
      console.warn(bearId);
      const bearToModify = bears.find((bear) => bear.id === parseInt(bearId, 10));
      bearToModify.count += 1;
    }
  }));
};

const handleButtonClick = () => {
  document.querySelector('#bear-form').addEventListener('submit', bearFormInfo);
  bears.forEach((bear) => {
    document.getElementById(bear.id).removeEventListener('click', (taco) => catchAFish(taco));
  });
  buildABear(bears);
  bears.forEach((bear) => {
    document.getElementById(bear.id).addEventListener('click', (taco) => catchAFish(taco));
  });
};

export default handleButtonClick;
