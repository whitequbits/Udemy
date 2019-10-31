// First Excercise

// Search for the first and the last tweet on the twitter
// If the tweet is contained inside the array

array = ["hi", "luck", "you"]; //O(1)

// first tweet
console.log(array[0]); //O(1)
// last tweet
console.log(array[array.length - 1]); //O(1)

// Big O Notations
// O(1)

// Second Excercise
// Search for the tweet according the date
// If the tweet is contained inside the array

array = [
  {
    tweet: "hi",
    date: 2012
  },
  {
    tweet: "luck",
    date: 2014
  },
  {
    tweet: "you",
    date: 2018
  }
];

function searchtweet(params) {
  for (let index = 0; index < array.length; index++) {
    if (array[index].date == params) {
      console.log(array[index].tweet);
    }
  }
}

searchtweet(2018);

// Big O Notations
// O(n) => due to the for with array.length

// Third Excercise
// Determine the big of the length method for the string

console.log("hhbjrehbrjbw".length);

// Big O Notations
// is depend on the programming language and the method it self, but for the javascript the length method is O(1)
