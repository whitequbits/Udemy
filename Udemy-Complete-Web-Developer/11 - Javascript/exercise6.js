// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.

var newarray = array.shift("Banana");
console.log(newarray);

// 2. Sort the array in order.

var newarray = array.sort();
console.log(newarray);

// 3. Put "Kiwi" at the end of the array.

var newarray = array.push("Kiwi");
console.log(newarray);

// 4. Remove "Apples" from the array.

var newarray = array.shift("Apples");
console.log(newarray);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

var newarray = array.reverse();
console.log(newarray);

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

var fruitIWant = array2[1][1][0];
console.log(fruitIWant);
