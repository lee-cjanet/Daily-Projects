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
		cells[i].addEventListener('click', turnClick)
	}
}

function turnClick(e) {
	return turn(e.target.id, huPlayer);
}

function turn(squareId, player) {
	cells[squareId].innerText = player;
	origBoard[squareId] = player;
	const gameWon = checkWin(origBoard, player);
	if (gameWon) {
		gameOver(gameWon);
	}
}

function checkWin(board, player) {
  // find the idx where player has played. concat idx if el == player
	let plays = board.reduce((accum, el, i) => (el === player) ? accum.concat(i) : accum, []);
	console.log(plays)
	let gameWon = null;
  // [index, win] == find the index of the winCombos AND return the w
	for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
      // index: winning combo, player: which player won
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function gameOver(gameWon) {
	for (let index of winCombos[gameWon.index]) {
		document.getElementById(index).style.backgroundColor = 
			gameWon.player == huPlayer ? "blue" : "red";
	}
	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', turnClick, false)
	}
}
