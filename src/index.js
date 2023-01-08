import readlineSync from 'readline-sync';

export const getRandomArbitrary = (min, max) => Math.floor(Math.random()
  * (Math.floor(max) - Math.ceil(min) + 1))
  + Math.ceil(min);

// eslint-disable-next-line import/no-mutable-exports
export let userName = null;
export const greet = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const isCorrect = (yourAnswer, savedResult) => parseInt(yourAnswer, 10) === savedResult;

export const throwWrongAnswer = (userAnswer, result) => {
  console.log(
    `"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`,
  );
  return console.log(`Let's try again, ${userName}!`);
};
