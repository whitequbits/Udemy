/* Quick Sort
Using recursion and Devide & Conquer
*/
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, leftIndex, rightIndex) {
  let smallerIndex;
  //if leftIndex < rightIndex or the element inside the array is still bigger than 1
  if (leftIndex < rightIndex) {
    // we want that the pivotIndex is the last element of the array, if the length is greater than 1
    let pivotIndex = rightIndex;
    // call partition function for comparing each element
    smallerIndex = partition(array, pivotIndex, leftIndex, rightIndex);
    //sort left and right array
    quickSort(array, leftIndex, smallerIndex - 1);
    quickSort(array, smallerIndex + 1, rightIndex);
  }
  return array;
}

function partition(array, pivotIndex, leftIndex, rightIndex) {
  // smaller Index is index that indicate position for the smaller value supposed to be
  // array[smallerIndex] = array[0]
  let smallerIndex = leftIndex;

  //check each element one by one
  for (let index = leftIndex; index < rightIndex; index++) {
    //if the currentValue is smaller than the pivot value
    if (array[index] < array[pivotIndex]) {
      //swap currentValue to the smallerIndex position
      swap(array, index, smallerIndex);
      //smallerIndex increment
      smallerIndex++;
    }
  }
  //swap, so the pivot position is at smallerIndex
  swap(array, pivotIndex, smallerIndex);
  //return the smallerIndex position
  return smallerIndex;
}

function swap(array, leftIndex, smallerIndex) {
  let temp = array[leftIndex];
  array[leftIndex] = array[smallerIndex];
  array[smallerIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
