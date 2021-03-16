// Merged two array and sort it

const array1 = [1, 2, 39, 239, 21, 3];
const array2 = [78, 23, 45, 24, 58];

function mergeTwoArray(arr1, arr2) {
  const mergedArray = arr1;

  // check the input
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  if (arr1.length > arr2.length) {
    const lastItemsArr = arr2.length - 1;
    for (let i = lastItemsArr; i >= 0; i--) {
      mergedArray.push(arr2[i]);
    }
  }

  if (arr2.length > arr1.length) {
    const lastItemsArr = arr1.length - 1;
    for (let i = lastItemsArr; i >= 0; i--) {
      mergedArray.push(arr1[i]);
    }
  }

  mergedArray.sort((a, b) => a - b);
  return mergedArray;
}

console.log(mergeTwoArray(array1, array2));
