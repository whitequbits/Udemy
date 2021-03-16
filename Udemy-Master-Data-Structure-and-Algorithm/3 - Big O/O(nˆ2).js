/*
Udemy
Course : Master Coding Interview : Data Structure + Algorithm
by : Andrei Neagoie
Big O - 33
*/

/*
The Big O Analysis :
O(nˆ2)
*/

boxes = ["a", "b", "c", "d", "e"];

//Conventional JavaScript Style
function logAllPairsofArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsofArray(boxes);

//ES5 Style (EcmaScript 5)
function logAllPairsofArrayES5(array) {
  array.forEach(function(firstboxes) {
    array.forEach(function(secondboxes) {
      console.log(firstboxes, secondboxes);
    });
  });
}

logAllPairsofArrayES5(boxes);
