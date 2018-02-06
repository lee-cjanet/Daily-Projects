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

let wonX = 0;
let wonO = 0;

// function getElById(id, parent) {
// 	parent = parent || document.body;
//
// 	// bfs each children
// 	let queue = [parent];
// 	while (queue.length > 0) {
// 		let visit = queue.shift();
// 		if (visit.id === id) {
// 			return visit;
// 		} else {
// 			visit.childNodes.forEach(child => {
// 				queue.push(child);
// 			});
// 		}
// 	}
//
// 	return null;
// }

// console.log(getElById('2'))

const cells = [...document.querySelectorAll('.cell')];
startGame();

function startGame() {
	document.querySelector('.endgame').style.display = 'none';
	origBoard = Array.from(Array(9).keys());
	for (let i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}

function turnClick(e) {
	if (typeof origBoard[e.target.id] == 'number') {
		turn(e.target.id, huPlayer);
		if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);
	}
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
	declareWinner(gameWon.player == huPlayer ? "You Win!" : "You Lose...")
}


// player 2 ==========================

function declareWinner(who) {
	document.querySelector(".endgame").style.display = 'block';
	document.querySelector(".endgame").innerText = who;
}

function emptySquares() {
	return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
	// return emptySquares()[0];
	return minimax(origBoard, aiPlayer).index;
}

function checkTie() {
  // if no 'numbered' squares, remove all click eventlisteners
	if (emptySquares().length == 0) {
		for (var i = 0; i < cells.length; i++) {
			cells[i].style.backgroundColor = 'green';
			cells[i].removeEventListener('click', turnClick, false);
		}
		declareWinner('Tie Game!');
		return true;
	}
	return false;
}


// minimax ==========================

function minimax(newBoard, player) {
	var availSpots = emptySquares(newBoard);

	//base case
	if (checkWin(newBoard, huPlayer)) {
		return {score: -10};
	} else if (checkWin(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}

	//collect moves
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		//add move to the board
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax(newBoard, huPlayer);
			move.score = result.score;
		} else {
			var result = minimax(newBoard, aiPlayer);
			move.score = result.score;
		}

		//set move back to index
		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if (player === aiPlayer) {
		var bestScore = -10000;
		for(var i=0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i=0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}
