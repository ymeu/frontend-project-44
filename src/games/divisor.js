import readlineSync from 'readline-sync';
import { getRandomInt, userName, throwWrongAnswer } from '../index.js';

let result = null;

// gets greatest common divisor
const getResult = (number1, number2) => {
  const divisorsForNumber1 = [];
  const divisorsForNumber2 = [];
  const commonDivisors = [];

  for (let i = 1; i <= number1; i += 1) {
    if (number1 % i === 0) {
      divisorsForNumber1.push(i);
    }
  }
  for (let i = 1; i <= number2; i += 1) {
    if (number2 % i === 0) {
      divisorsForNumber2.push(i);
    }
  }
  for (let i = 0; i < divisorsForNumber1.length; i += 1) {
    for (let j = 0; j < divisorsForNumber2.length; j += 1) {
      if (divisorsForNumber1[i] === divisorsForNumber2[j]) {
        commonDivisors.push(divisorsForNumber1[i]);
      }
    }
  }
  return commonDivisors.pop();
  // pop?? take the last? largest item from array
};

// gets 2 random numbers
const renderTwoNumbers = (number1, number2) => {
  result = getResult(number1, number2);
  return `${number1} ${number2}`;
};

// checking the answer
const isCorrect = (yourAnswer, savedResult) => parseInt(yourAnswer, 10) === savedResult;

// main game function
const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    console.log(
      'Question: ',
      renderTwoNumbers(getRandomInt(), getRandomInt()),
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

export default gcdGame;
