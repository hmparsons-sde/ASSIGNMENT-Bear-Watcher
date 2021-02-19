import bears from './helpers/data/bearData';
import bearFormEvent from './components/bearForm';
import buildABear from './helpers/river';

const init = () => {
  console.warn('bears!');
  bearFormEvent();
  buildABear(bears);
};

init();
