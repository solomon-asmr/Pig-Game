'use strict';
const player0E0 = document.querySelector('#score--0');
const player0El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const newGame = document.querySelector('.btn--new');
player0E0.value = 0;
player0El.value = 0;
player0E0.textContent = '0';
player0El.textContent = '0';
let player0Score = player0E0.value;
let player1Score = player0El.value;
dice.classList.add('hidden');
let current = 0;
newGame.addEventListener('click', function () {
  player0E0.value = 0;
  player0El.value = 0;
  player0E0.textContent = '0';
  player0El.textContent = '0';
  current0.textContent = 0;
  current1.textContent = 0;
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
});
btnRoll.addEventListener('click', function () {
  const diceNumber = Math.floor(Math.random() * 6 + 1);
  let img = document.createElement('img');
  document.querySelector('main').appendChild(img);
  if (diceNumber === 1) {
    img.src = 'dice-1.png';
    img.classList.add('dice');
    dice.classList.remove('hidden');
    current = 0;
    if (player0.classList.contains('player--active')) {
      player1.classList.add('player--active');
      player0.classList.remove('player--active');
      current0.textContent = 0;
      //player0Score += current;
    } else {
      current1.textContent = 0;
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
      //player1Score += current;
    }
  } else if (diceNumber === 2) {
    img.src = 'dice-2.png';
    img.classList.add('dice');
    dice.classList.remove('hidden');
  } else if (diceNumber === 3) {
    img.src = 'dice-3.png';
    img.classList.add('dice');
    dice.classList.remove('hidden');
  } else if (diceNumber === 4) {
    img.src = 'dice-4.png';
    img.classList.add('dice');
    dice.classList.remove('hidden');
  } else if (diceNumber === 5) {
    img.src = 'dice-5.png';
    img.classList.add('dice');
    dice.classList.remove('hidden');
  } else {
    img.src = 'dice-6.png';
    img.classList.add('dice');
    dice.classList.remove('hidden');
  }
  if (diceNumber !== 1) {
    current += diceNumber;
    if (player0.classList.contains('player--active')) {
      current0.textContent = current;
      //player0Score += current;
      // player0E0.textContent = player0Score;
    } else {
      //player1Score += current;
      current1.textContent = current;
      //.textContent = player1Score;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    current0.textContent = 0;

    player0Score += current;
    console.log('player 0 score value ' + player0Score);
    player0E0.textContent = player0Score;
    player1.classList.add('player--active');
    player0.classList.remove('player--active');
    current = 0;
  } else {
    player1Score += current;
    current1.textContent = 0;
    player0El.textContent = player1Score;
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    current = 0;
  }
});
