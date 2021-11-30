const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

const getRollInWords = (firstRoll, secondRoll) => {
  const sum = firstRoll + secondRoll;
  if (sum === 2) {
    return `Snake Eyes`;
  } else if (sum === 3) {
    return `Ace Deuce`;
  } else if (sum === 4) {
    return `Easy Four`;
  } else if (sum === 5) {
    return `four`;
  } else if (sum === 6) {
    return `five`;
  } else if (sum === 7) {
    return `six`;
  } else if (sum === 8) {
    return `six`;
  } else if (sum === 9) {
    return `six`;
  } else if (sum === 10) {
    return `six`;
  } else if (sum === 11) {
    return `six`;
  } else if (sum === 12) {
    return `six`;
  } else {
    console.error(`Woops! Something went wrong`);
    return `${firstRoll} and ${secondRoll}`;
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
  const firstRoll = rollTheDice('first-dice');
  const secondRoll = rollTheDice('second-dice');

  const messageEl = document.querySelector('.message b');
  messageEl.textContent = getRollInWords(firstRoll, secondRoll);
}
document.querySelector('#roll-button').addEventListener('click', rollTheDices);
window.addEventListener('load', rollTheDices);