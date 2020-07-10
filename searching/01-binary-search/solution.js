function binarySearch(array, target) {
  // Write your code here.

  const result = search(array, target, 0, array.length - 1);
  return result;
}

function search(array, target, left, right) {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);

  if(array[middle] === target) {
    return middle;
  }

  if(target < array[middle]) {
    return search(array, target, left, middle - 1);

  }

  return search(array, target, middle + 1, right);
}

if (require.main === module) {
  const assert = require("assert").strict;

  const inputArray = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
  const targetSum = 33;

  assert.deepStrictEqual(binarySearch(inputArray, targetSum), 3);
}
