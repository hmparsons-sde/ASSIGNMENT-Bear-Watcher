import '../styles/main.scss';
import handleButtonClick from './components/bearForm';
import { buildABear, bears } from './helpers/river';

const init = () => {
  console.warn('bears!');
  buildABear(bears);
  handleButtonClick();
};

init();
