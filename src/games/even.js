import readlineSync from 'readline-sync';
import { getRandomArbitrary, userName, throwWrongAnswer } from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomArbitrary(1, 100);
    const result = isEven(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (yourAnswer === result) {
      console.log('Correct!');
    } else {
      return throwWrongAnswer(yourAnswer, result);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
