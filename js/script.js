const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

const getRollInWords = (firstRoll, secondRoll) => {
  // hard cases
  if (firstRoll === 2 && secondRoll === 2){
    return `Hard Four`;
  }
  if (firstRoll === 3 && secondRoll === 3){
    return `Hard Six`;
  }
  if (firstRoll === 4 && secondRoll === 4){
    return `Hard Eight`;
  }
  if (firstRoll === 5 && secondRoll === 5){
    return `Hard Ten`;
  }

  // specific cases
  if (firstRoll === 1 && secondRoll === 3){
    return `Easy Four`;
  }

  if (firstRoll === 6 && secondRoll === 4){
    return `Easy Ten`;
  }

  // sum cases
  const sum = firstRoll + secondRoll;
  if (sum === 2){
    return `Snake Eyes`;
  }
  if (sum === 3){
    return `Ace Deuce`;
  }
  if (sum === 5){
    return `Five (Fever Five)`;
  }
  if (sum === 6){
    return `Easy Six`;
  }
  if (sum === 7){
    return `Natural or Seven Out`;
  }
  if (sum === 8){
    return `Easy Eight`;
  }
  if (sum === 9){
    return `Nine (Nina)`;
  }
  if (sum === 11){
    return `Yo (Yo-leven)`;
  }
  if (sum === 12) {
    return `Boxcars or Midnight`;
  }

  return `${firstRoll} and ${secondRoll}`;
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