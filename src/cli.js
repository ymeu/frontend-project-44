import readlineSync from 'readline-sync';

let userName = null;
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

// export { userName, greeting };
// export default greeting;
