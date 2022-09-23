const boardNumber = document.querySelectorAll('[data-number]');
const restartButton = document.getElementById('restart-button');
const startButton = document.getElementById('start-button');
const winningMessage = document.getElementById('win-message');

let cross = 'X';
let circle = 'O';
let counter = 0;

let gameWin;
let currentValue;
let squareSelect;

let gameBoard = [];

//startButton
startButton.addEventListener('click', () => {
//target squares
boardNumber.forEach(number => {
  number.addEventListener('click', squareClicked, {once: true}) 
})})
//restartButton
restartButton.addEventListener('click', () => location.reload())

function squareClicked(e) {
  squareSelect = e.target;
  //counter
  counter++;
  playerTurn()
  draw()
  winCheck()
}
function disableButtons() {
  //Disabling all buttons
  for (const button of boardNumber) {
    button.disabled = true;
  }
}
function enableButtons() {
  //Disabling all buttons
  for (const button of boardNumber) {
    button.disabled = false;
  }
}
function winner() {
  disableButtons()
  winningMessage.textContent = `${gameWin.name}` + ` ${gameWin.marker}` + ' wins!';
}
const winCheck = () => {
  //Horizontal Check
  if(boardNumber[0].textContent != '' && boardNumber[1].textContent == boardNumber[0].textContent && boardNumber[2].textContent == boardNumber[1].textContent) {
    winner()
  }
  if(boardNumber[3].textContent != '' && boardNumber[4].textContent == boardNumber[3].textContent && boardNumber[4].textContent == boardNumber[5].textContent) {
    winner()
  }
  if(boardNumber[6].textContent != '' && boardNumber[7].textContent == boardNumber[6].textContent && boardNumber[8].textContent == boardNumber[7].textContent) {
    winner()
  }
  //Vertical Check
  if(boardNumber[0].textContent != '' && boardNumber[3].textContent == boardNumber[0].textContent && boardNumber[6].textContent == boardNumber[3].textContent) {
    winner()
  }
  if(boardNumber[1].textContent != '' && boardNumber[4].textContent == boardNumber[1].textContent && boardNumber[7].textContent == boardNumber[4].textContent) {
    winner()
  }
  if(boardNumber[2].textContent != '' && boardNumber[5].textContent == boardNumber[2].textContent && boardNumber[8].textContent == boardNumber[5].textContent) {
    winner()
  }
  //Diagonal Check
  if(boardNumber[0].textContent != '' && boardNumber[4].textContent == boardNumber[0].textContent && boardNumber[8].textContent == boardNumber[4].textContent) {
    winner()
  }
  if(boardNumber[2].textContent != '' && boardNumber[4].textContent == boardNumber[2].textContent && boardNumber[6].textContent == boardNumber[4].textContent) {
    winner()
  }
}
const playerTurn = () => {
  //whose turn
  if(currentValue == cross) {
    currentValue = circle;
  }
  else {
    currentValue = cross;
  }
  //placeMark
  squareSelect.textContent = currentValue;
  gameWin = new player('Player', currentValue)
}
const draw = () => { if(counter == 9) 
  winner()
}
function player(name, marker) {
  this.name = name
  this.marker = marker
}
