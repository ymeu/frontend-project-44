#!/usr/bin/env node
import { greet, primeAndEvenGame } from '../src/index.js';
import { isEven } from '../src/games/even.js';

greet();
primeAndEvenGame('even', isEven);
