import 'regenerator-runtime/runtime'

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
