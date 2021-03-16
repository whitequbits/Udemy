// Fibonacci Slow O(2ˆn)
let calculations1 = 0;
function fibonacciRecursiveAndrei(n) {
  calculations1++;
  if (n < 2) {
    return n;
  }
  return fibonacciRecursiveAndrei(n - 1) + fibonacciRecursiveAndrei(n - 2);
}

// Fibonacci with caching O(n)
// Cache is hash with O(1) lookup
let calculations2 = 0;
const fibonnaciMaster = () => {
  let cache = {};
  return function fib(n) {
    calculations2++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
};

//Iterative Array
const fibonnaciMaster2 = n => {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
};

const fibonnaci = fibonnaciMaster();
console.log(fibonnaci(20));
console.log("Fast", calculations2);
console.log(fibonacciRecursiveAndrei(20));
console.log("Slow", calculations1);
console.log(fibonnaciMaster2(20));
