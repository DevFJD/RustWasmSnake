import init, { greet } from 'rust_wasm_snake';

init().then((_) => {
  greet('Frank');
});
