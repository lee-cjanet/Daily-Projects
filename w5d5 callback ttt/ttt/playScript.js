const Game = require('./game');
const rl = require('readline');
const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})

let g = new Game();
g.run(reader, completion);

function completion() {
  reader.question("Play again? y or n: ", answer => {
    if (answer === 'y') {
      g = new Game();
      g.run(reader, completion);
    } else {
      reader.close();
    }
  });
}