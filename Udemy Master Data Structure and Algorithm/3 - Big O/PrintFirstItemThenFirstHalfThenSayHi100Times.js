/*
Udemy
Course : Master Coding Interview : Data Structure + Algorithm
by : Andrei Neagoie
Big O - 33
*/

/*
The Big O Analysis :

Detail :
O(1 + n + 100)

While (n == so big)
O(n)
*/

function PrintFirstItemThenFirstHalfThenSayHi100Times(items) {
  //print only the first items
  console.log(items[0]); // O(1)

  //seek for the half of the items.length
  halfofit = Math.floor(items.length / 2);
  var index = 0;

  //print the first half of items

  while (index < halfofit) {
    console.log(items[index]);
    index++;
  } // O(n)

  //print the Say Hi 100
  for (let i = 0; i < 100; i++) {
    console.log("Say Hi");
  } // O(100)
}

//Start of the main program
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank"
];
PrintFirstItemThenFirstHalfThenSayHi100Times(everyone);
