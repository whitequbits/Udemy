/*
Udemy
Course : Master Coding Interview : Data Structure + Algorithm
by : Andrei Neagoie
Big O - 34
*/

/*
The Big O Analysis :

O(n + nˆ2) = O(nˆ2)
*/

function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers");
  numbers.forEach(function(number) {
    console.log(number); //O(n)
  });
  console.log("and these are their sums:");
  numbers.forEach(function(_firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(_firsNumber + secondNumber);
    });
  }); //O(nˆ2)
}

numbers = [1, 2, 3, 4, 5];

printAllNumbersThenAllPairSums(numbers);
