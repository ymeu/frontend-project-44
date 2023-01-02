import readlineSync from 'readline-sync';

// export const getRandomInt = () => Math.floor(Math.random() * 100);
export const getRandomInt = () => Math.floor(Math.random() * (100 - 1) + 1);

export let userName = null;
export const greet = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const throwWrongAnswer = (userAnswer, result) => {
  console.log(
    `"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`
  );
  return console.log(`Let's try again, ${userName}!`);
};
