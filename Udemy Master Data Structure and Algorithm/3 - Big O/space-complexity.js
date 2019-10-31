/*
Udemy
Course : Master Coding Interview : Data Structure + Algorithm
by : Andrei Neagoie
Big O - 42
*/

function booooo(n) {
  for (let index = 0; index < n.length; index++) {
    console.log("booooo!");
  }
}

booooo([1, 2, 3, 4, 5]);

//Space Complexity  = O(1)
//Because it only make one variable

function printHi(n) {
  let hiarray = [];

  for (let index = 0; index < n; index++) {
    hiarray[index] = "hi";
  }

  return hiarray;
}

answerarray = printHi(5);

console.log(answerarray);

//Space Complexity  = O(n)
//Because it make n variable using the array
