let origBoard;

const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
];

const cells = [...document.querySelectorAll('.cell')];
startGame();

function startGame() {
	// document.querySelectorAll('.end-game').style.display = 'none';
	origBoard = Array.from(Array(9).keys());
	console.log(origBoard);
	for (let i = 0; i < cells.length; i++) {
		console.log(cells[i])
		cells[i].addEventListener('click', turnClick)
	}
}

function turnClick(e) {
	return turn(e.target.id, huPlayer);
	// console.log(e.target.classList.addClass);
	// e.className += " " + "active";
	// console.log(e.className);
}

function turn(squareId, player) {
	cells[squareId].innerText = player;
	origBoard[squareId] = player;
	const checkWin = winner(origBoard, player)
}

function checkWin(board, player) {
  // find the idx where player has played. concat idx if el == player
	let plays = board.reduce((accum, el, i) => (el === player)) ? a.concat(i) : accum, []);
	let gameWon = null;
  // [index, win] == find the index of the winCombos AND return the w
	for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem > -1))) {
      // index: winning combo, player: which player won
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function gameOver() {
	// console.log(cells[1].addClass('active'))
  if (winner()) {
	  return true;
  }
	
  return cells.every(cell => {
    return (cell.innerText !== "");
  });
}

function winner() {
  for (let idx=0; idx < winCombos.length; idx++) {
    if (winCombos[idx].every(i => {
			return cells[i].innerText === huPlayer
		})) {
      return huPlayer;
    } else if (winCombos[idx].every(i => {
			return cells[i].innerText === aiPlayer;
		})) {
      return aiPlayer;
    }
  }
  return null;
}
