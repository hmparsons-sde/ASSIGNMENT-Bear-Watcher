import bears from '../helpers/data/bearData';
import buildABear from '../helpers/river';

const bearFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bear-name').value;
  const imageUrl = document.querySelector('#bear-url').value;
  const obj = {
    name,
    imageUrl,
  };
  obj.id = (bears.length + 1);
  bears.push(obj);
  buildABear(bears);
  document.querySelector('form').reset();
};

const bearFormEvent = () => {
  document
    .querySelector('#bear-form')
    .addEventListener('submit', bearFormInfo);
};

export default { bearFormInfo, bearFormEvent };
