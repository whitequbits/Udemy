//Implement a function that reverses a string using iteration...and then recursion!
answer = [];
function reverseStringRecursive(str) {
  if (str.length > 0) {
    answer.push(str.split("").pop());
    str = str
      .split("")
      .splice(0, str.length - 1)
      .join("");
    reverseStringRecursive(str);
  }
  return answer.join("");
}

function reverseStringIterative(str) {
  answer = [];
  for (let index = str.length - 1; index >= 0; index--) {
    answer.push(str[index]);
  }
  return answer.join("");
}

console.log(reverseStringRecursive("yoyo mastery"));
console.log(reverseStringIterative("yoyo mastery"));
//should return: 'yretsam oyoy'
