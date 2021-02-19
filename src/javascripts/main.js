import '../styles/main.scss';
import handleButtonClick from './components/bearForm';
import buildABear from './helpers/river';
import bears from './helpers/data/bearData';

const init = () => {
  console.warn('bears!');
  buildABear(bears);
  handleButtonClick();
};

init();
