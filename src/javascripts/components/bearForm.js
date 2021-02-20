import bears from '../helpers/data/bearData';
import buildABear from '../helpers/river';

function bearFormInfo(e) {
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
}

const handleButtonClick = () => {
  document.querySelector('#bear-form').addEventListener('submit', bearFormInfo);
};

export default handleButtonClick;
