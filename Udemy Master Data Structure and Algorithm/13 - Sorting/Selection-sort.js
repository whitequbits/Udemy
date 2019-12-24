/* Selection Sort
Using two loops O(nˆ2)

*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallest;
    let smallestIndex = i;
    for (let j = i; j < array.length; j++) {
      //check the smallest is null?
      if (smallest == null) {
        smallest = array[j];
      }
      //compare and find the smallest
      if (smallest > array[j]) {
        smallest = array[j];
        smallestIndex = j;
      }
    }
    //swap
    let temp = array[i];
    array[i] = smallest;
    array[smallestIndex] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);
