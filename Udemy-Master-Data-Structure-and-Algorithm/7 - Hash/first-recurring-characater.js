//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5];
const array4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];

// Naive Approach - Using Array
// Time Complexity : O(nˆ2)
// Space Complexity : O(1)

function firstRecurringCharacter(input) {
  let answer;
  let range = 1000000;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        if (range > j - i) {
          range = j - i;
          answer = input[i];
        }
      }
    }
  }
  return answer;
}

console.log(firstRecurringCharacter(array1));
console.log(firstRecurringCharacter(array2));
console.log(firstRecurringCharacter(array3));
console.log(firstRecurringCharacter(array4));

// Using the hash
// Time Complexity : O(n)
// Space Complexity : O(n)

function firstRecurringCharacter_Hash(input) {
  // Init the Hash first
  let Hash = {};

  // loop through the input
  for (let i = 0; i < input.length; i++) {
    // check if there is any hash that have the input[i] key
    // if not said that Hash[input[i]] it's true
    if (Hash[input[i]]) {
      return input[i];
    } else {
      Hash[input[i]] = true;
    }
  }
}

console.log(firstRecurringCharacter_Hash(array1));
console.log(firstRecurringCharacter_Hash(array2));
console.log(firstRecurringCharacter_Hash(array3));
console.log(firstRecurringCharacter_Hash(array4));
