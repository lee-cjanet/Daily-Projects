const Board = require('./board');
const moveError = require('./moveError');

// promptMove(reader, callback)
  // this.board.print();
  // console.log(currentPLayer)
  // reader.question(question, answer => {
    // callback(parseInt(answer);
  // })
  
// run(reader, gameCompletionCallback)
  // this.promptMove(reader, num => {
    // try {
      // this.playMove(Game.moves[num])
    // } catch(e)
  // })
    // if isOver
      // declare winner -> gameCompletionCallback
      // else {
        // this.run()
      // }

// isOver()
  // this.board.isOver
  
// Winner()
  // this.board.winner();
  
// swapTurn()
  // toggle this.currentPlayer
  
// playMove
  // this.board.placeMark(pos, this.currentPlayer)
  // swapTurn()

// this.board = new Board();
// this.currentPlayer = Board.marks[0]
  
// }

class Game {
  constructor() {
    this.board = new Board();
    this.currentPlayer = Board.marks[0];
  }
  
  run(reader, gameCompletionCallback) {
    this.promptMove(reader, num => {
      try {
        this.playMove(Game.moves[num]);
      } catch(e) {
        if (e instanceof moveError) {
          console.log(e.msg);
        } else {
          throw e;
        }
      }
    
      if (this.isOver()) {
        if (this.winner()) {
          console.log(`You won! Player: ${this.winner()}`);
        } else {
          console.log("it's a tie...")
        }
        gameCompletionCallback();
      } else {
        this.run(reader, gameCompletionCallback);
      }
    });
  }
  
  promptMove(reader, callback) {
    this.board.print();
    console.log(`Current Turn: ${this.currentPlayer}`)
    
    reader.question("Please enter a move: ", answer => {
      callback(parseInt(answer));
    });
  }
  
  playMove(pos) {
    this.board.placeMark(pos, this.currentPlayer);
    this.swapTurn();
  }
  
  swapTurn() {
    if (this.currentPlayer === Board.marks[0]) {
      this.currentPlayer = Board.marks[1];
    } else {
      this.currentPlayer = Board.marks[0];
    }
  }
  
  isOver(){
    return (this.board.isOver());
  }
  
  winner() {
    return (this.board.winner());
  }
}

Game.moves = {
  1:[0,0],
  2:[0,1],
  3:[0,2],
  4:[1,0],
  5:[1,1],
  6:[1,2],
  7:[2,0],
  8:[2,1],
  9:[2,2],
  
}

module.exports = Game;

// g = new Game();
// console.log(g.currentPlayer);
// console.log(g.playMove([0,0]))
// console.log(g.playMove([0,1]))
// console.log(g.playMove([0,2]))
