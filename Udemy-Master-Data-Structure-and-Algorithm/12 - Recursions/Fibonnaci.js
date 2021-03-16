//Recursion = O(2ˆN)
//Iterative = O(N)

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8
//Using the golden ratio:
const Phi = (Math.sqrt(5) + 1) / 2;

function fibonacciGoldenRatio(n) {
  return (Phi ** n - (-1 * Phi) ** -n) / Math.sqrt(5);
}

// Using Array Recursive
let counter = 0;
let answer = [];

function fibonacciRecursive(n) {
  if (counter < n + 1) {
    if (counter < 2) {
      answer.push(counter);
    } else {
      answer.push(answer[counter - 1] + answer[counter - 2]);
    }
    counter++;
    fibonacciRecursive(n);
  }
  return answer[answer.length - 1];
}

// Using Iterative and Array
function fibonacciIterative(n) {
  let counter = 0;
  let answer = [];
  while (counter < n + 1) {
    if (counter < 2) {
      answer.push(counter);
    } else {
      answer.push(answer[counter - 1] + answer[counter - 2]);
    }
    counter++;
  }
  return answer[answer.length - 1];
}

const answer1 = fibonacciGoldenRatio(6);
console.log(answer1);
const answer2 = fibonacciRecursive(6);
console.log(answer2);
const answer3 = fibonacciIterative(6);
console.log(answer3);

// Solution from Andrei

function fibonacciRecursiveAndrei(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursiveAndrei(n - 1) + fibonacciRecursiveAndrei(n - 2);
}

const answer4 = fibonacciRecursiveAndrei(6);
console.log(answer4);
