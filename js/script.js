const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

const rollTheDice = () => {
  const diceRoll = getRandomDiceRoll();
  document.querySelector('.message b').textContent = diceRoll;
  const image = document.querySelector('.dice img');
  image.setAttribute('src', `img/dice${diceRoll}.svg`);
  image.setAttribute('alt', `Rolled ${diceRoll}`);
}

document.getElementById('roll-button').addEventListener('click', rollTheDice);
window.addEventListener('load', rollTheDice);