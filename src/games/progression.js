import readlineSync from 'readline-sync';
import {
  getRandomArbitrary,
  isCorrect,
  userName,
  throwWrongAnswer,
} from '../index.js';

let result = null;

// function that gets the progression array with dots
const renderProgression = () => {
  const progressionStart = getRandomArbitrary(1, 15);
  const progressionLength = getRandomArbitrary(5, 10);
  const progressionStep = getRandomArbitrary(2, 7);
  const dotsPosition = getRandomArbitrary(0, progressionLength);
  const iterationLimit = progressionStart + progressionLength * progressionStep;

  const progression = [];
  const progressionWithDots = [];

  for (let i = progressionStart; i < iterationLimit; i += progressionStep) {
    progression.push(i);
  }

  for (let i = 0; i < progression.length; i += 1) {
    if (i === dotsPosition) {
      result = progression[i];
      progressionWithDots.push('..');
    } else {
      progressionWithDots.push(progression[i]);
    }
  }

  return progressionWithDots.join(' ');
};

// main game function
const progressionGame = () => {
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${renderProgression()}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (isCorrect(yourAnswer, result) === true) {
      console.log('Correct!');
    } else {
      return throwWrongAnswer(yourAnswer, result);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default progressionGame;
