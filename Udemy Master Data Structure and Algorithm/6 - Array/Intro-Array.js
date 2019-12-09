// Introduction Array

const array = ["a", "b", "c", "d", "e"];

// Every operation in array and it's Big O Notation

// Lookup - looking for the data
console.log(array[2]);

// Push - append data to the end of the array
array.push("f"); //O(1)
console.log(array);

// Pop - delete data at the end of the array
array.pop(); //O(1)
console.log(array);

// unshift - add data at the beginning of the array
array.unshift("0"); //O(n) => we need to loop to arrange the array again after insertion
console.log(array);

// splice
array.splice(2, 0, "hello"); // O(n) => we need to loop to arrange the array again after insertion
console.log(array);
