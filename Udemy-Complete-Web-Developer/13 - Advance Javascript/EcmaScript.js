// ES 7 (ES 2016)

const a = "hello";

console.log(a.includes("l")); // true

const number = 2;

const square = x => x ** 2; // 4
const cube = x => x ** 3; // 8

console.log(square(number));
console.log(cube(number));

// ES 8 (ES 2017)

let b = "Hello";

console.log(b.padStart(10));
console.log(b.padEnd(10));

const fun = (a, b, c, d) => {
  return a;
};

console.log(fun(1, 2, 3, 4));

// Object.entries, Object.values, Object.keys

let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Rebamba"
};

console.log("Key Mapping");
Object.keys(obj).map(keys => console.log(keys));
console.log("Values Mapping");
Object.values(obj).map(values => console.log(values));
console.log("Entries Mapping");
Object.entries(obj).map(entries => console.log(entries));

// ES 10 (ES 2019)

// flat method
const array = [1, 2, [3, 4, 5]];

console.log(array.flat());

const array1 = [1, 2, [3, 4, [5]]];

console.log(array1.flat(2));

//trimStart() and trimEnd() method
const userEmail3 = "     cannotfillemailformcorrectly@gmail.com   ";

console.log(userEmail3.trimStart().trimEnd());

// fromEntries method

const username = [
  ["manu18", 18],
  ["lowl17", 40],
  ["hsiwu2", 23]
];

console.log(Object.fromEntries(username)); // make it into Object

// try catch method (try first when error run the catch function)
try {
  bob + 5;
} catch {
  console.log("you're messed up");
}
