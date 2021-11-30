const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

let lastRoll = 0;
const rollTheDice = () => {
  const diceRoll = getRandomDiceRoll();

  const image = document.querySelector('.dice img');
  image.setAttribute('src', `img/dice${diceRoll}.svg`);
  image.setAttribute('alt', `Rolled ${diceRoll}`);

  const messageEl = document.querySelector('.message b');
  if (lastRoll === diceRoll) {
    messageEl.textContent = `${diceRoll}, AGAIN!`;
  } else {
    messageEl.textContent = diceRoll;
  }

  lastRoll = diceRoll;
}

document.querySelector('#roll-button').addEventListener('click', rollTheDice);
window.addEventListener('load', rollTheDice);