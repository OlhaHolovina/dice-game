const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

const getRollInWords = (diceRoll) => {
  if (diceRoll === 1) {
    return `one`;
  } else if (diceRoll === 2) {
    return `two`;
  } else if (diceRoll === 3) {
    return `three`;
  } else if (diceRoll === 4) {
    return `four`;
  } else if (diceRoll === 5) {
    return `five`;
  } else if (diceRoll === 6) {
    return `six`;
  } else {
    console.error(`Woops! Something went wrong`);
    return diceRoll;
  }
}
const rollTheDice = (elementId) => {
  const diceRoll = getRandomDiceRoll();

  const image = document.querySelector(`#${elementId} img`);
  image.setAttribute('src', `https://raw.githubusercontent.com/juneate/dice-game/e17f82ac4be2bce40c69cfcf07b29e371d5c913f/img/dice${diceRoll}.svg`);
  image.setAttribute('alt', `Rolled ${diceRoll}`);
  return diceRoll;
}

const rollTheDices = () => {
  rollTheDice('first-dice');
  rollTheDice('second-dice');

  // const messageEl = document.querySelector('.message b');
  // messageEl.textContent = getRollInWords(diceRoll);
}
document.querySelector('#roll-button').addEventListener('click', rollTheDices);
window.addEventListener('load', rollTheDice);