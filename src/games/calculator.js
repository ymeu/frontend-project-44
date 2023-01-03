import readlineSync from 'readline-sync';
import { getRandomArbitrary, isCorrect, userName, throwWrongAnswer } from '../index.js';

let result = null;

// gets result of the operation
const getResult = (number1, number2, operator) => {
  if (operator === '+') {
    return number1 + number2;
  }
  if (operator === '-') {
    return number1 - number2;
  }
  return number1 * number2;
};

// gets the random operation string
const renderMathOperationString = (number1, number2, operator) => {
  result = getResult(number1, number2, operator);
  return `${number1} ${operator} ${number2}`;
};

const operators = ['+', '-', '*'];

// main game function
const calcGame = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < operators.length; i += 1) {
    console.log(
      'Question: ',
      renderMathOperationString(
        getRandomArbitrary(1, 100),
        getRandomArbitrary(1, 100),
        operators[i],
      )
    );
    const yourAnswer = readlineSync.question('Your answer: ');

    if (isCorrect(yourAnswer, result) === true) {
      console.log('Correct!');
    } else {
      return throwWrongAnswer(yourAnswer, result);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
