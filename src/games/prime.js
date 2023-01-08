import readlineSync from 'readline-sync';
import { getRandomArbitrary, userName, throwWrongAnswer } from '../index.js';

// function that gets the sequence between given values
const getNumbersSequence = (start, end) => (
  Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx));

// function that gets the prime number array
const renderPrimeNumber = () => {
  const seqNumbers = getNumbersSequence(2, 100);
  const primeNumbers = [];
  const divisors = [2, 3, 5, 7]; // first 4 prime numbers, any other number that they are
  // divided by without remainder is not prime. So to check if number is prime, these 
  // numbers will be used
  let divisorCounter = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const each of seqNumbers) {
    divisorCounter = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const divisor of divisors) {
      if (each === divisor) {
        primeNumbers.push(each);
      }
      if (each % divisor === 0) {
        break;
      } else if (each % divisor !== 0 && divisorCounter < 3) {
        // if divisorCounter < 3 than "each" didn't iterate through all the divisors, =>
        // and therefore can still be not a prime number. The prime needs to satisfy all the =>
        // divisors
        divisorCounter += 1;
        // eslint-disable-next-line no-continue
        continue;
      } else if (each === primeNumbers[primeNumbers.length - 1]) {
        break;
      } else {
        primeNumbers.push(each);
      }
    }
  }
  return primeNumbers;
};

const primeNumbers = renderPrimeNumber();

// checks if random number is prime number
const isPrime = (randomNumber) => {
  if (primeNumbers.includes(randomNumber)) {
    return 'yes';
  }
  return 'no';
};

// main game function
const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomArbitrary(1, 100);
    const result = isPrime(randomNumber);
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

export default primeGame;
