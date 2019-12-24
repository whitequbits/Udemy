/* Bubble Sort
Using two loops O(nˆ2)
First one is to make sure it iterate until the array sorted
Second one is to compare every element in the array
Unique Logic (Optional) :
We know that every each iteration, the element on near the last item is sorted
So we don't need to compare until the end of the array
That's why we use j < array.length - (1 + i)
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - (1 + i); j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

bubbleSort(numbers);
console.log(numbers);
