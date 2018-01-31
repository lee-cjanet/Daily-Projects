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
// const cells = document.getElementById('.cell');
console.log(cells);

function gameOver() {
  if (winner()) {
    return true;
  }

  return cells.every(cell => {
    console.log(cell);
    return (cell.innerText !== "");
  });
}

function winner() {
  for (let idx=0; idx < winCombos.length; idx++) {
    if (winCombos[idx].every(cell => cell.innerText === huPlayer)) {
      return huPlayer;
    } else if (winCombos[idx].every(cell => cell.innerText === aiPlayer)) {
      return aiPlayer;
    }
  }
  return null;
}
