/* Selection Sort
Using two loops O(nˆ2)
1. First one loop we want iterate over every elements
2. In the first step the smallest is array[i] and smallesIndex is i
3. Second loop, we want compare and find the smallest and smallesIndex
4. After looping, Swap the smallest with array[i]
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallest = array[i];
    let smallestIndex = i;
    for (let j = i; j < array.length; j++) {
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
