function threeNumberSum(array, targetSum) {
  // Write your code here.
  if (array.length < 3) {
    return [];
  }

  array.sort((a, b) => a - b);
  const resultArray = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1,
      right = array.length - 1;

    while (left < right) {
      // found a match. Adds it to the resulting array.
      // increase left and decrease right to find another match
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        resultArray.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        // resulting sum is smaller so let's increase left
        left++;
      } else if (currentSum > targetSum) {
        // resulting sum is greater than target, so let's decrease left to get a smaller sum
        right--;
      }
    }
  }

  return resultArray;
}

if (require.main === module) {
  const assert = require("assert").strict;

  const inputArray = [12, 3, 1, 2, -6, 5, -8, 6];
  const targetSum = 0;

  assert.deepStrictEqual(threeNumberSum(inputArray, targetSum), [
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5],
  ]);
}
