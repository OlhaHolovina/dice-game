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

let lastRoll = 0;
const rollTheDice = () => {
  const diceRoll = getRandomDiceRoll();

  const image = document.querySelector('.dice img');
  image.setAttribute('src', `https://raw.githubusercontent.com/juneate/dice-game/e17f82ac4be2bce40c69cfcf07b29e371d5c913f/img/dice${diceRoll}.svg`);
  image.setAttribute('alt', `Rolled ${diceRoll}`);

  const messageEl = document.querySelector('.message b');
  const rollInWords = getRollInWords(diceRoll);
  if (lastRoll === diceRoll) {
    messageEl.textContent = `${rollInWords}, AGAIN!`;
  } else {
    messageEl.textContent = rollInWords;
  }

  lastRoll = diceRoll;
}

document.querySelector('#roll-button').addEventListener('click', rollTheDice);
window.addEventListener('load', rollTheDice);