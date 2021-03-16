/* Insertion Sort
https://www.youtube.com/watch?v=OGzPmgsI-pQ
Using two loops O(nˆ2)
1. First one loop we want iterate over every elements
2. In the first step the key is array[1], and keyIndex is 1
3. Second loop, we want compare and if the array[j] is bigger than key, it will shift the sorted array
4. After that, array[keyIndex] = key
*/
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let keyIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      //swap
      if (array[j] > key) {
        array[j + 1] = array[j];
        keyIndex = j;
      }
    }
    array[keyIndex] = key;
  }
}

insertionSort(numbers);
console.log(numbers);
