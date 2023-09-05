#!/usr/bin/env node
import isPrime from '../src/games/prime.js';
import { greet, primeAndEvenGame } from '../src/index.js';

greet();
primeAndEvenGame('prime', isPrime);
