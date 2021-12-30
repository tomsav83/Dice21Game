let h = document.querySelector('h2');
let userName = prompt('Please enter name');
h.innerHTML = h.innerHTML + ' Good Luck ' + userName;

function randomRoll() {
  return Math.floor(Math.random() * 6) + 1;
}
const diceResult = document.getElementById('diceImage');
const playerScore = document.getElementById('scoreRecord');

let score = 0;
let lost = 'no';

function rollTheDice() {
  let currentRoll = randomRoll();
  if (score > 20 || lost == 'yes') {
    score = 0;
    lost = 'no';
  }

  if (currentRoll == 1) {
    diceResult.src = 'images/dice1.png';
    score = score + 1;
  }

  if (currentRoll == 2) {
    diceResult.src = 'images/dice2.png';
    score = score + 2;
  }

  if (currentRoll == 3) {
    diceResult.src = 'images/dice3.png';
    score = score + 3;
  }

  if (currentRoll == 4) {
    diceResult.src = 'images/dice4.png';
    score = score + 4;
  }

  if (currentRoll == 5) {
    diceResult.src = 'images/dice5.png';
    score = score + 5;
  }

  if (currentRoll == 6) {
    diceResult.src = 'images/dice6.png';
    score = score + 6;
  }

  if (score < 21) {
    playerScore.innerHTML = `Score = ${score}`;
  } else if (score > 21) {
    playerScore.innerHTML = `Score = ${score} You Lose :(`;
  } else {
    playerScore.innerHTML = `Score = ${score} You Win :)`;
  }
}
