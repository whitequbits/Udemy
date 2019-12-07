// Object Spread Operator
const array = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

// How to call the function using ES 9
console.log(sum(...array));

// looping through multiple promises
// for await(request of requests)

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  try {
    const ArrayofPromises = urls.map(url => {
      return fetch(url);
    });
    for await (request of ArrayofPromises) {
      const response = request.json();
      console.log(response);
    }
  } catch (error) {
    console.log("Oooppsss");
  }
};
