const moveError = require('./moveError');

// placeMark(pos, mark) *
// isOver() -> if board is filled or connected mark
// winner() *
// makeGrid() *
// print() *
// isEmptyPos(pos) *
// isValidPos(pos) *

class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }
  
  isOver() {
    if (this.winner()) {
      return true;
    }
    
    return (this.grid.every(row => {
      return (row.every(pos => {
        pos != null
      }));
    }));
  }
  
  winner() {
    const routes = [
      [[0,0], [0,1], [0,2]],
      [[1,0], [1,1], [1,2]],
      [[2,0], [2,1], [2,2]],
      [[0,0], [1,0], [2,0]],
      [[0,1], [1,1], [2,1]],
      [[0,2], [1,2], [2,2]],
      [[0,0], [1,1], [2,2]],
      [[0,2], [1,1], [2,0]]
    ]
    
    for (let row = 0; row < routes.length; row++) {
      if (routes[row].every(pos => {
        return (this.grid[pos[0]][pos[1]] == Board.marks[0])
      })) {
        return 'X';
      } else if (routes[row].every(pos => {
        return (this.grid[pos[0]][pos[1]] == Board.marks[1])
      })) {
        return 'O'
      }
    }
    return null;
  }
  
  placeMark(pos, mark) {
    if (!Board.isValidPos(pos)) {
      throw new moveError('Please choose between positions 1-9')
    }
    const [row, col] = pos;
    if (!this.isEmpty(row, col)) {
      throw new moveError('Position is taken')
    }
    
    this.grid[row][col] = mark;
  }
  
  print() {
    let display = ["-------------\n"];
    let i = 1
    
    for (let row = 0; row < 3; row++) {
      let r = ["|"];
      for (let col = 0; col < 3; col++) {
        const el = (this.grid[row][col] == null ? 
        i : this.grid[row][col])
        r.push(` ${el} |`)
        i++;
      }
      display.push(r.join(""));
      display.push("\n-------------\n")
    }
    console.log(display.join(""));
  }
  
  isEmpty(row, col) {
    return (this.grid[row][col] == null)
  }
  
  static isValidPos(pos) {
    if (!(pos instanceof Array)) {
      return false;
    }
    return (
      (0 <= pos[0]) &&
       (pos[0] < 3) && 
       (0 <= pos[1]) && 
       (pos[1] < 3)
    )
  }
  
  static makeGrid() {
    let grid = [];
    for (let row = 0; row < 3; row++) {
      grid.push([]);
      for (let col = 0; col < 3; col++) {
        grid[row].push(null);
      }
    }
    return grid;
  }
}

Board.marks = ['X', 'O'];

module.exports = Board;

// b = new Board();
// console.log(b.placeMark([0, 2], 'X'))
// console.log(b.placeMark([1, 2], 'X'))
// console.log(b.placeMark([2, 2], 'X'))
// console.log(b.isOver())
// console.log(b.winner())
// console.log(b.print());
// console.log(b.print());
// console.log(b.print());
