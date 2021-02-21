import '../styles/main.scss';
import buildABear from './helpers/river';
import bears from './helpers/data/bearData';
import handleButtonClick from './components/bearForm';

const init = () => {
  console.warn('bears!');
  buildABear(bears);
  handleButtonClick();
};

init();
