import init, { greet } from 'RustWasmSnake';

init().then((_) => {
  greet('Frank');
});
