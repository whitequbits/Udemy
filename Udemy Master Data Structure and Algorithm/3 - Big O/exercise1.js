/*
Udemy
Course : Master Coding Interview : Data Structure + Algorithm
by : Andrei Neagoie
Big O - 30
*/

// What is the Big O of the below function? (Hint, you may want to go line by line)

/*Legends :

O(1) only once = 1
O(n) the statement is running n times = n

*/

/* Result of O :
  3 O(1) + 4 O(n)
  Big O(3 + 4n) -> Not Efficient
  It Should be like this
  Big O(n)
  */

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n) where n is the input.length
    anotherFunction(); // O(n) where n is the input.length
    let stranger = true; // O(n) where n is the input.length
    a++; // O(n) where n is the input.length
  }
  return a; // O(1)
}
