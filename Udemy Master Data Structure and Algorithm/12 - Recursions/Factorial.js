//Recursion = O(2ˆN)
//Iterative = O(N)

// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
let answer = 1;

function findFactorialRecursive(number) {
  if (number !== 0) {
    answer *= number;
    number -= 1;
    findFactorialRecursive(number);
  }
  return answer;
}

function findFactorialIterative(number) {
  answer = 1;
  while (number !== 0) {
    answer *= number;
    number -= 1;
  }
  return answer;
}

const result = findFactorialRecursive(5);
console.log("Recursive : ", result);

const result2 = findFactorialIterative(5);
console.log("Iterative : ", result2);
