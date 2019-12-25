/* Counting Sort

*/
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 0];

function countingSort(array) {
  let hash = {};
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1;
    } else if (hash[array[i]]) {
      hash[array[i]] += 1;
    }
  }

  for (let i = 0; i < array.length; i++) {
    while (hash[Object.keys(hash)[i]] > 0) {
      answer.push(Object.keys(hash)[i]);
      hash[Object.keys(hash)[i]] -= 1;
    }
  }
  return answer;
}

const answer = countingSort(numbers);
console.log(answer);
