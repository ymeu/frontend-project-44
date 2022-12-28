#!/usr/bin/env node
import readlineSync from 'readline-sync'; 

const getRandomInt = () => Math.floor(Math.random() * 100);

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

let userName = null;
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswerCount = 0;

  while (correctAnswerCount <= 2) {
    const randomNumber = getRandomInt();
    console.log('Question: ', randomNumber);
    const answerToEven = readlineSync.question('Your answer: ');

    if (answerToEven === isEven(randomNumber)) {
      correctAnswerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answerToEven}" is wrong answer ;(. Correct answer was "${isEven(randomNumber)}".`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

greeting();
evenGame();

export { greeting, evenGame };
