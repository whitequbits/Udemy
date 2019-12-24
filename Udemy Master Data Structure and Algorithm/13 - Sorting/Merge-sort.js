/* Merge Sort
Using recursion
*/
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  // this if array.length === 1, end the recursion (return array)
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  //[99, 44, 6, 2, 1]
  //Using slice(startpoint, endpoint)
  const left = array.slice(0, array.length / 2);

  //[5, 63, 87, 283, 4, 0]
  //Using slice(startpoint) -> till the end of the array
  const right = array.slice(array.length / 2);

  //return the merged array with calling the merge function
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // Initialize
  const result = [];
  //leftIndex and rightIndex is needed for comparison
  let leftIndex = 0;
  let rightIndex = 0;

  //while the leftIndex < left.length and rightIndex < right.length
  while (leftIndex < left.length && rightIndex < right.length) {
    //if left[0] < right[0]
    if (left[leftIndex] < right[rightIndex]) {
      //push the left[0] to result
      result.push(left[leftIndex]);
      //leftIndex from 0 -> 1
      leftIndex++;
    } else {
      //push the right[0] to result
      result.push(right[rightIndex]);
      //rightIndex from 0 -> 1
      rightIndex++;
    }
  }
  //merge result using concat with remaining element in left or right
  //and return it
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);
